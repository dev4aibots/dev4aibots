import type { Metadata } from "next";
import StatusBadge from "@/components/StatusBadge";
import {
  ArrowRight,
  Cpu,
  Database,
  FlaskConical,
  ShieldCheck,
  Code2,
} from "@/components/icons";
import { SITE, REPOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Engineering at Dev4AIBots: holo-racer (deployed webcam racing game with a real-time vision pipeline), Pramaan (Python RAG evidence engine), and the native Android platform work — described at senior-engineer depth, limits disclosed.",
  alternates: { canonical: "/engineering" },
  openGraph: {
    title: "Engineering · Dev4AIBots",
    description:
      "Real systems, real tests, real deployments — described at the level a senior engineer would hold us to. Limits disclosed.",
    url: `${SITE.domain}/engineering`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Engineering · Dev4AIBots",
    description:
      "Real systems, real tests, real deployments — limits disclosed.",
  },
};

export default function Engineering() {
  return (
    <>
      <section className="hero" aria-labelledby="eng-title">
        <div className="container">
          <span className="section-label">engineering</span>
          <h1 id="eng-title">Depth we can demonstrate, limits we disclose.</h1>
          <p className="lede">
            Our record is two systems with real code, real tests, and real
            deployments, plus the platform work now underway — each described
            here at the level a senior engineer would hold us to. Where
            something is unproven, we say so.
          </p>
          <div className="hero-meta" aria-label="Engineering facts">
            <span className="meta-tag">
              <span className="dot" aria-hidden="true" />
              2 systems in production or active dev
            </span>
            <span className="meta-tag">tests before claims</span>
            <span className="meta-tag">limits written down</span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="holo-racer">
        <div className="container">
          <div className="case-row">
            <div>
              <StatusBadge status="working" />
              <h2 id="holo-racer" style={{ marginTop: "1rem" }}>
                holo-racer
              </h2>
              <p className="prose">
                A webcam-controlled 3D racing game that runs entirely in the
                browser. Two fists steer, hand depth controls speed, pinches
                click, open palms pause. It is deployed to production and
                playable now — the strongest proof that this company ships
                real-time systems.
              </p>
              <div className="stat-row">
                <div className="stat">
                  <div className="num">60fps</div>
                  <div className="cap">rendering target</div>
                </div>
                <div className="stat">
                  <div className="num">worker</div>
                  <div className="cap">vision off the main thread</div>
                </div>
                <div className="stat">
                  <div className="num">live</div>
                  <div className="cap">production deploys on Vercel</div>
                </div>
              </div>
            </div>
            <div className="case-evidence">
              <div>
                <h3>
                  <Cpu size={18} aria-hidden="true" /> Pipeline
                </h3>
                <p>
                  MediaPipe HandLandmarker (WASM,{" "}
                  <code>@mediapipe/tasks-vision</code> 1.0.1, pinned) in a
                  dedicated Web Worker. Gestures derive from pure landmark
                  geometry — no classifier head — with exponential smoothing,
                  MinTimeInState debouncing, hysteresis, and TTL ghost
                  persistence. Latest-frame-wins backpressure; the main
                  thread never touches a video frame.
                </p>
              </div>
              <div>
                <h3>
                  <FlaskConical size={18} aria-hidden="true" /> Evaluation
                </h3>
                <p>
                  Unit tests over gesture thresholds and debounce windows;
                  browser QA against production deploys; deploy verification
                  checks HTTP status, bundle hash, and pipeline markers in the
                  served bundle. Honest boundary: verification covers delivery
                  and asset integrity, not gesture quality on specific
                  hardware — real-camera validation is pending, and tracking
                  refinement is parked at the founder&apos;s direction.
                </p>
              </div>
              <div className="bento-foot">
                <a
                  className="card-link"
                  href={REPOS.holoRacerLive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo <ArrowRight size={16} />
                </a>
                <a
                  className="card-link"
                  href={REPOS.holoRacer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="case-row">
            <div>
              <StatusBadge status="development" />
              <h2 id="pramaan" style={{ marginTop: "1rem" }}>
                Pramaan
              </h2>
              <p className="prose">
                A self-hosted, multi-modal RAG evidence engine in Python. Its
                defining choice: authorization happens{" "}
                <strong>before</strong> retrieval — Casbin RBAC/ABAC gates
                every query — so access control is structural, not a prompt
                instruction.
              </p>
              <div className="stat-row">
                <div className="stat">
                  <div className="num">RBAC</div>
                  <div className="cap">auth before retrieval</div>
                </div>
                <div className="stat">
                  <div className="num">hybrid</div>
                  <div className="cap">vector + BM25 + rerank</div>
                </div>
                <div className="stat">
                  <div className="num">evals</div>
                  <div className="cap">RAGAS-style verification</div>
                </div>
              </div>
            </div>
            <div className="case-evidence">
              <div>
                <h3>
                  <Database size={18} aria-hidden="true" /> Retrieval
                </h3>
                <p>
                  BGE-M3 vectors combined with BM25, reciprocal-rank fusion,
                  and RankGPT reranking; text, images, tables, and charts are
                  handled, with multilingual retrieval. Claim-level
                  verification follows a RAGAS-style protocol, and an Evidence
                  Ledger UI shows what backs each answer.
                </p>
              </div>
              <div>
                <h3>
                  <FlaskConical size={18} aria-hidden="true" /> Honest notes
                </h3>
                <p>
                  The repository has real structure — apps, src, tests, evals,
                  docs, demo data. It is in active development; benchmark
                  depth and evaluation coverage are being documented as they
                  land. We describe the architecture as designed and the code
                  as it stands.
                </p>
              </div>
              <div className="bento-foot">
                <a
                  className="card-link"
                  href={REPOS.pramaan}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repository <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="case-row">
            <div>
              <StatusBadge status="development" />
              <h2 id="platform-apps" style={{ marginTop: "1rem" }}>
                Platform apps
              </h2>
              <p className="prose">
                The business and customer apps are being built as native
                Android applications — the surface local businesses and their
                customers actually live on.
              </p>
            </div>
            <div className="case-evidence">
              <div>
                <h3>
                  <Code2 size={18} aria-hidden="true" /> Stack
                </h3>
                <p>
                  Native Android in Kotlin, MVI architecture for predictable
                  state, Clerk for authentication. MVPs for onboarding,
                  dashboard, announcements, services/slots, bookings, and the
                  code/QR join flow are implemented and integration-tested.
                </p>
              </div>
              <div>
                <h3>
                  <ShieldCheck size={18} aria-hidden="true" /> Honest notes
                </h3>
                <p>
                  Repositories are not public yet and nothing is deployed —
                  so this work stays labeled &ldquo;in development&rdquo; on
                  the Product page until publication. We do not describe
                  private code as shipped.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="practices">
        <div className="container">
          <span className="section-label">how we work</span>
          <h2 id="practices">How do we keep the claims honest?</h2>
          <p className="lede">
            Three practices, applied to every system above and mapped to
            evidence you can inspect.
          </p>
          <ol className="practice-list">
            <li>
              <span className="panel-icon" aria-hidden="true">
                <FlaskConical size={18} />
              </span>
              <div>
                <h3>Test before claim</h3>
                <p>
                  holo-racer ships with unit tests over the gesture pipeline;
                  Pramaan carries an evals directory with RAGAS-style claim
                  verification. A number on this site is either measured or it
                  does not appear.
                </p>
              </div>
            </li>
            <li>
              <span className="panel-icon" aria-hidden="true">
                <ShieldCheck size={18} />
              </span>
              <div>
                <h3>Status labels everywhere</h3>
                <p>
                  Working, in development, roadmap — the same discipline as
                  our product pages applies to code. Deployed means a
                  production URL you can open, not a screenshot.
                </p>
              </div>
            </li>
            <li>
              <span className="panel-icon" aria-hidden="true">
                <Cpu size={18} />
              </span>
              <div>
                <h3>Small, boring deploys</h3>
                <p>
                  Both systems deploy as small static or container artifacts
                  on Vercel and Docker Compose. No infrastructure theater;
                  the complexity budget goes into the product.
                </p>
              </div>
            </li>
          </ol>
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
