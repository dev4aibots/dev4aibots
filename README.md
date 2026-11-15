# Devraj Gadhvi

**Applied AI & AI Automation Engineer** — I build the parts of AI products that survive real users: permission-aware retrieval, multi-tenant data isolation, workflow automation that can be retried safely, and evaluations that say no.

Gujarat, India (UTC+5:30) · open to remote roles worldwide · immediate start
Founder, **Dev4AIBots** — Udyam-registered studio (UDYAM-GJ-29-0019103)

[![Portfolio](https://img.shields.io/badge/Portfolio-dev4aibots.com-0A66C2?style=for-the-badge)](https://dev4aibots.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devraj0770)
[![Email](https://img.shields.io/badge/Email-hello@dev4aibots.com-EA4335?style=for-the-badge)](mailto:hello@dev4aibots.com)

---

## Start here

| Project | What it is | Proof | Code |
|---|---|---|---|
| **AI Employee Platform** | Multi-tenant AI-agent SaaS core: Postgres RLS isolation, AES-256-GCM credential vault bound to tenant, idempotent billing webhooks, n8n dispatch with a circuit breaker, hash-chained audit ledger | **155 tests** · [live demo runs 12 real attacks in your browser](https://ai-employee-platform-dev4aibots.vercel.app) · green CI on Node 20/22/24 | [repo](https://github.com/dev4aibots/ai-employee-platform) |
| **PRAMAAN** | Zero-trust RAG: injection screening before indexing, authorization enforced inside the vector query, evidence-bound answers, PII redaction, tamper-evident audit | [live demo](https://pramaan-dev4aibots.vercel.app) · Next.js 14 + PGlite/pgvector + Transformers.js, all in-browser | [repo](https://github.com/dev4aibots/Pramaan) |
| **Harness² Studio** | Zero-dependency Material 3 desktop control room for Google Research Harness² — resumable hash-verified installer, 71 audited controls | **44 tests** · ruff clean · CI on Ubuntu/macOS/Windows · installer verified 107 files / 848 KB end to end | [repo](https://github.com/dev4aibots/harness2-studio) |

---

## Systems

Execution labels are literal. `real` means the deployed code does the work when you open it; `simulated` means the interface is real and the engine is a deterministic stand-in, and the app says so on the page.

| System | What it demonstrates | Execution | Stack |
|---|---|---|---|
| [AI Employee Platform](https://github.com/dev4aibots/ai-employee-platform) | Tenancy, credential handling, webhook idempotency, retry discipline, audit chains | `real` | PostgreSQL RLS · TypeScript · n8n · LiteLLM |
| [PRAMAAN](https://github.com/dev4aibots/Pramaan) | Security architecture for RAG — 5 checkpoints from ingest to audit | `real` | Next.js 14 · PGlite + pgvector · Transformers.js |
| [Semantic Code Search](https://github.com/dev4aibots/semantic-code-search) | AST-aware chunking, hybrid dense+sparse ranking with RRF, measured recall | `real` (live `/api/query`) | TypeScript · Tree-sitter · `make eval` |
| [MCP Tool Registry](https://github.com/dev4aibots/mcp-tool-registry) | Model Context Protocol server with parity tests against the spec | `real` (in-browser JSON-RPC) | TypeScript · MCP · Zod |
| [Harness² Studio](https://github.com/dev4aibots/harness2-studio) | Desktop tooling craft: process trees, atomic writes, hash-verified downloads | `real` | Python 3.12 · Tk · zero runtime deps |
| [Holo-Racer](https://github.com/dev4aibots/holo-racer) | Latency engineering: Web Worker inference, One Euro filtering, quantized netcode | `real` | Three.js · MediaPipe WASM · Playwright |
| [LLM Gateway Benchmarks](https://github.com/dev4aibots/llm-benchmarks) | 191 models across 5 providers measured for latency and success — used to build a routing table | `real measurement` | LiteLLM · Python probes |
| [AI Agent Eval Harness](https://github.com/dev4aibots/ai-agent-eval-harness) | Prompt-injection and answer-quality probes, offline dry-run by default | `real` | Python · stdlib |

Deterministic interface prototypes — the UI is complete, the engine is a labelled simulation: [Infra Diagnostics Console](https://infra-diagnostics-agent-demo.vercel.app), [Deep Research Orchestrator](https://deep-research-orchestrator-demo.vercel.app), [Agentic CLI Workspace](https://agentic-cli-workspace-demo.vercel.app), [Realtime Voice AI](https://github.com/dev4aibots/realtime-voice-ai).

---

## What I actually work with

- **Retrieval** — hybrid dense + lexical search, RRF fusion, AST-aware chunking, pgvector with filtered HNSW, per-row authorization inside the query
- **Agents & automation** — n8n multi-tenant workflows, LiteLLM routing with failover, MCP tool servers, human-in-the-loop approval gates, idempotency keys, dead-letter paths
- **Security** — row level security, envelope encryption with key rotation, HMAC verification with replay windows, prompt-injection screening, PII redaction, hash-chained audit logs
- **Evaluation** — probe datasets, pass/fail gates, latency and cost per run, provenance labels that separate measured numbers from published ones
- **Delivery** — TypeScript/Next.js, Python/FastAPI, PostgreSQL, Docker, GitHub Actions CI, Vercel

---

## How I work

I build with AI assistance and I say so. The value I add is deciding what to build, designing the boundaries, and refusing to ship a claim I cannot demonstrate — which is why most of the repos above carry a test suite, a verification file with observed output, or an in-app note about what is simulated.

Two rules I keep:

1. **A number in a README links to a command that produces it.** If it does not, it gets labelled as a published reference, not a measurement.
2. **Team work is labelled as team work.** PRAMAAN was a Code Carnival 3.0 submission by Team Madmax (led by Nikhil Rathod) — all 70 commits in that repository are mine, and the README credits both the team and the AI tooling used to build it.

## Background, stated plainly

No university degree claimed. No prior paid employment claimed. 16 vendor-verified credentials across Microsoft, Google, IBM, DeepLearning.AI, Vanderbilt, UiPath, Edureka and JetBrains (71 courses, labs and capstones), each linked to its verification page at [dev4aibots.com](https://dev4aibots.com).

What I am offering is evidence of work: systems you can open, tests you can run, and a written record of what each one does and does not prove.
