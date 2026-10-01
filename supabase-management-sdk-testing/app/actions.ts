"use server";

import { SupabaseManagementSDK } from "@voxgig-sdk/supabase-management-sdk";
import { findOperation, validateParameters, type SdkMethodName } from "@/lib/sdk-catalog";

type RequestInput = {
  token: string;
  entity: string;
  method: SdkMethodName;
  parameters: Record<string, unknown>;
};

type Result = {
  ok: boolean;
  elapsedMs: number;
  data?: unknown;
  error?: unknown;
};

function safeSerialize(value: unknown, seen = new WeakSet<object>()): unknown {
  if (value === null || typeof value !== "object") {
    return typeof value === "bigint" ? value.toString() : value;
  }

  if (seen.has(value)) return "[Circular]";
  seen.add(value);

  if (value instanceof Error) {
    const error = value as Error & Record<string, unknown>;
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
      status: error.status,
      code: error.code,
      result: safeSerialize(error.result, seen),
      spec: safeSerialize(error.spec, seen),
    };
  }

  if (Array.isArray(value)) return value.map((item) => safeSerialize(item, seen));

  const candidate = value as {
    Name?: string;
    data?: () => unknown;
    match?: () => unknown;
    deleted?: () => unknown;
  };

  // Generated entities retain client/context references. Extract their public
  // data before walking object properties so none of those references cross
  // the server action boundary.
  if (typeof candidate.data === "function") {
    return {
      entity: candidate.Name ?? "GeneratedEntity",
      data: safeSerialize(candidate.data(), seen),
      match: typeof candidate.match === "function" ? safeSerialize(candidate.match(), seen) : undefined,
      deleted: typeof candidate.deleted === "function" ? safeSerialize(candidate.deleted(), seen) : undefined,
    };
  }

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, item]) => [
      key,
      safeSerialize(item, seen),
    ]),
  );
}

export async function runSdkOperation(input: RequestInput): Promise<Result> {
  const startedAt = performance.now();
  const operation = findOperation(input.entity, input.method);

  if (!input.token.trim()) {
    return { ok: false, elapsedMs: 0, error: { type: "ValidationError", message: "A personal access token is required." } };
  }

  if (!operation) {
    return { ok: false, elapsedMs: 0, error: { type: "ValidationError", message: "Unsupported operation." } };
  }

  const missing = validateParameters(operation, input.parameters);
  if (missing.length > 0) {
    return {
      ok: false,
      elapsedMs: 0,
      error: { type: "ValidationError", message: "Required parameters are missing.", fields: missing },
    };
  }

  try {
    const client = new SupabaseManagementSDK({ apikey: input.token });
    const factory = client[input.entity as keyof typeof client] as unknown as () => Record<string, unknown>;
    const entity = factory.call(client);
    const method = entity[input.method] as unknown as (params: Record<string, unknown>) => Promise<unknown>;
    const response = await method.call(entity, input.parameters);

    return { ok: true, elapsedMs: Math.round(performance.now() - startedAt), data: safeSerialize(response) };
  } catch (error) {
    return { ok: false, elapsedMs: Math.round(performance.now() - startedAt), error: safeSerialize(error) };
  }
}
