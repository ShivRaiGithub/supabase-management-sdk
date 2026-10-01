"use client";

import { useState } from "react";
import { runSdkOperation } from "./actions";
import { OPERATIONS, validateParameters, type Operation } from "@/lib/sdk-catalog";

type ViewerResult = {
  ok: boolean;
  elapsedMs: number;
  data?: unknown;
  error?: unknown;
};

function formatParameters(parameters: Record<string, string>) {
  return JSON.stringify(parameters, null, 2);
}

export default function Home() {
  const [token, setToken] = useState("");
  const [connected, setConnected] = useState(false);
  const [operation, setOperation] = useState<Operation>(OPERATIONS[0]);
  const [parameters, setParameters] = useState(formatParameters(OPERATIONS[0].example));
  const [result, setResult] = useState<ViewerResult>();
  const [running, setRunning] = useState(false);

  function selectOperation(nextOperation: Operation) {
    setOperation(nextOperation);
    setParameters(formatParameters(nextOperation.example));
    setResult(undefined);
  }

  async function runRequest() {
    let parsed: Record<string, unknown>;

    try {
      parsed = JSON.parse(parameters) as Record<string, unknown>;
    } catch (error) {
      setResult({
        ok: false,
        elapsedMs: 0,
        error: { type: "ValidationError", message: "JSON parameters are invalid.", details: String(error) },
      });
      return;
    }

    const missing = validateParameters(operation, parsed);
    if (missing.length > 0) {
      setResult({
        ok: false,
        elapsedMs: 0,
        error: { type: "ValidationError", message: "Required parameters are missing.", fields: missing },
      });
      return;
    }

    setRunning(true);
    setResult(await runSdkOperation({ token, entity: operation.entity, method: operation.method, parameters: parsed }));
    setRunning(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <header className="mb-8 border-b border-slate-800 pb-8">
          <p className="mb-2 text-xs font-semibold tracking-[.24em] text-cyan-400">LOCAL SDK TEST TOOL</p>
          <h1 className="text-3xl font-semibold">Supabase Management Console</h1>
          <p className="mt-2 max-w-3xl text-slate-400">Choose a supported request, supply its required parameters, then explicitly run it. Your token exists only in this page&apos;s React state.</p>
        </header>

        <section className="card mb-6">
          <h2>SDK Configuration</h2>
          <div className="mt-4 flex flex-wrap items-end gap-4">
            <label className="grow">Supabase Personal Access Token
              <input value={token} onChange={(event) => { setToken(event.target.value); setConnected(false); }} type="password" placeholder="sbp_..." autoComplete="off" />
            </label>
            <button type="button" onClick={() => setConnected(Boolean(token.trim()))}>Connect SDK</button>
            <span className={connected ? "status good" : "status"}>{connected ? "Connected" : "Not Connected"}</span>
          </div>
        </section>

        <section className="card mb-6">
          <h2>Quick Actions</h2>
          <p className="muted">Selecting an action only fills the request form. It never sends a request.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {OPERATIONS.map((item) => (
              <button key={item.name} type="button" className={operation.name === item.name ? "quick active" : "quick"} onClick={() => selectOperation(item)}>
                {item.name}
              </button>
            ))}
          </div>
        </section>

        <section className="card mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div><h2>Request Form</h2><p className="muted">Review and edit the generated request before sending it.</p></div>
            <span className="status">Manual execution only</span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <label>Operation Name<input readOnly value={operation.name} /></label>
            <label>Entity<input readOnly value={operation.entity} /></label>
            <label>Method<input readOnly value={operation.method + "()"} /></label>
          </div>
          <label className="mt-4 block">JSON Parameters
            <textarea value={parameters} onChange={(event) => setParameters(event.target.value)} spellCheck={false} />
          </label>
          {operation.required.length > 0 && <p className="mt-3 text-sm text-amber-300">Required: {operation.required.join(", ")}</p>}
          <button type="button" className="mt-4" disabled={running} onClick={runRequest}>{running ? "Running Request…" : "Run Request"}</button>
        </section>

        <section className="card">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div><h2>Response Viewer</h2><p className="muted">Safely serialized data only. SDK, client, and circular references are excluded.</p></div>
            {result && <span className={result.ok ? "status good" : "status bad"}>{result.ok ? "Success" : "Error"} · {result.elapsedMs}ms</span>}
          </div>
          <pre>{result ? JSON.stringify(result.ok ? result.data : result.error, null, 2) : "Select a quick action, add parameters if required, then run the request."}</pre>
        </section>
      </div>
    </main>
  );
}
