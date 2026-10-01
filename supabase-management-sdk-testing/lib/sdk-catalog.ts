export type SdkMethodName = "list" | "load";

export type Operation = {
  name: string;
  entity: string;
  method: SdkMethodName;
  example: Record<string, string>;
  required: string[];
};

export const OPERATIONS: Operation[] = [
  { name: "List Organizations", entity: "V1OrganizationSlugResponseOutput", method: "list", example: {}, required: [] },
  { name: "List Projects", entity: "V1ProjectWithDatabaseResponseOutput", method: "list", example: {}, required: [] },
  { name: "Get Organization Members", entity: "V1OrganizationMemberResponseOutput", method: "list", example: { slug: "" }, required: ["slug"] },
  { name: "Get Project API Keys", entity: "ApiKey", method: "list", example: { ref: "" }, required: ["ref"] },
  { name: "Get Project Details", entity: "V1ProjectWithDatabaseResponseOutput", method: "load", example: { ref: "" }, required: ["ref"] },
  { name: "List Functions", entity: "Function", method: "list", example: { ref: "" }, required: ["ref"] },
];

export function findOperation(entity: string, method: string) {
  return OPERATIONS.find((operation) => operation.entity === entity && operation.method === method);
}

export function validateParameters(operation: Operation, parameters: Record<string, unknown>) {
  return operation.required.filter((field) => {
    const value = parameters[field];
    return typeof value !== "string" || value.trim().length === 0;
  });
}
