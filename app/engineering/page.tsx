import type { Metadata } from "next";
import StatusBadge from "@/components/StatusBadge";
import { REPOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Engineering at Dev4AIBots: real case studies — holo-racer, a deployed webcam racing game, and Pramaan, a Python RAG evidence engine — with honest notes on what is proven and what is not.",
  alternates: { canonical: "/engineering" },
};

export default function Engineering() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Engineering</span>
          <h1>Depth we can demonstrate, limits we disclose.</h1>
          <p className="lede">
            Our engineering record is two systems with real code, real tests,
            and real deployments — described here at the level a senior
            engineer would hold us to. Where something is unproven, we say so.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="holo-racer">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              <StatusBadge status="working" />
              <h2 id="holo-racer" style={{ marginTop: "1rem" }}>
                holo-racer
              </h2>
              <p>
                A webcam-controlled 3D racing game that runs entirely in the
                browser. Two fists steer, hand depth controls speed, pinches
                click, open palms pause. It is deployed to production and
                playable now.
              </p>
              <div className="stat-row">
                <div className="stat">
                  <div className="num">3D</div>
                  <div className="cap">Three.js cockpit + traffic scene</div>
                </div>
                <div className="stat">
                  <div className="num">Worker</div>
                  <div className="cap">Tracking off the main thread</div>
                </div>
                <div className="stat">
                  <div className="num">Live</div>
                  <div className="cap">Production deploys on Vercel</div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <h3>Stack</h3>
                <p>
                  Vite + TypeScript + Three.js. Hand tracking via MediaPipe
                  HandLandmarker (<code>@mediapipe/tasks-vision</code> 1.0.1,
                  WASM pinned), running in a dedicated Web Worker with
                  GPU-to-CPU fallback. Gestures are derived from pure landmark
                  geometry — no classifier head — with filtering, hysteresis,
                  and debounce stages to suppress misclicks. WebAudio for
                  sound, keyboard fallback, HUD and diagnostics UI.
                </p>
              </div>
              <div className="card" style={{ marginTop: "1.25rem" }}>
                <h3>Honest notes</h3>
                <p>
                  Deployed builds are verified for delivery and asset
                  integrity, not for gesture quality on the founder&apos;s
                  hardware — real-camera validation is pending, and tracking
                  refinement is parked at the founder&apos;s direction. We
                  report what CI and production checks prove, nothing more.
                </p>
                <div className="card-footer">
                  <a
                    className="card-link"
                    href={REPOS.holoRacerLive}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo →
                  </a>
                  <a
                    className="card-link"
                    href={REPOS.holoRacer}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pramaan">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div>
              <StatusBadge status="development" />
              <h2 id="pramaan" style={{ marginTop: "1rem" }}>
                Pramaan
              </h2>
              <p>
                A self-hosted, multi-modal RAG evidence engine in Python. Its
                defining choice: authorization happens <em>before</em>{" "}
                retrieval — Casbin RBAC/ABAC gates every query — so access
                control is structural, not a prompt instruction.
              </p>
              <div className="stat-row">
                <div className="stat">
                  <div className="num">RBAC</div>
                  <div className="cap">Auth before retrieval</div>
                </div>
                <div className="stat">
                  <div className="num">Hybrid</div>
                  <div className="cap">Vector + BM25 + rerank</div>
                </div>
                <div className="stat">
                  <div className="num">Evals</div>
                  <div className="cap">RAGAS-style verification</div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <h3>Stack</h3>
                <p>
                  Retrieval combines BGE-M3 vectors with BM25, reciprocal-rank
                  fusion, and RankGPT reranking; text, images, tables, and
                  charts are handled, with multilingual retrieval. Claim-level
                  verification follows a RAGAS-style protocol, and an Evidence
                  Ledger UI shows what backs each answer. Served via Streamlit
                  + FastAPI, deployed with Docker Compose; local Ollama /
                  llama.cpp with optional OpenAI-compatible BYOK.
                </p>
              </div>
              <div className="card" style={{ marginTop: "1.25rem" }}>
                <h3>Honest notes</h3>
                <p>
                  The repository has real structure — apps, src, tests, evals,
                  docs, demo data. It is in active development; benchmark
                  depth and evaluation coverage are being documented as they
                  land. We describe the architecture as designed and the code
                  as it stands.
                </p>
                <div className="card-footer">
                  <a
                    className="card-link"
                    href={REPOS.pramaan}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repository →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="practices">
        <div className="container">
          <span className="eyebrow">How we work</span>
          <h2 id="practices">Engineering practices, mapped to evidence.</h2>
          <div className="grid-3" style={{ marginTop: "2rem" }}>
            <div className="card">
              <h3>Test before claim</h3>
              <p>
                holo-racer ships with unit tests over the gesture pipeline;
                Pramaan carries an evals directory with RAGAS-style claim
                verification. A number on this site is either measured or it
                does not appear.
              </p>
            </div>
            <div className="card">
              <h3>Status labels everywhere</h3>
              <p>
                Working, in development, roadmap — the same discipline as our
                product pages applies to code. Deployed means a production URL
                you can open, not a screenshot.
              </p>
            </div>
            <div className="card">
              <h3>Small, boring deploys</h3>
              <p>
                Both systems deploy as small static or container artifacts on
                Vercel and Docker Compose. No infrastructure theater; the
                complexity budget goes into the product.
              </p>
            </div>
          </div>
          <div className="note-box">
            <strong>No fake sophistication.</strong> We will not dress up
            tutorial scaffolds as production systems, invent benchmarks, or
            claim scale we have not measured. The{" "}
            <a href="/open-source">Open Source</a> page labels learning builds
            as learning builds.
          </div>
        </div>
      </section>
    </>
  );
}
