import type { Metadata } from "next";
import StatusBadge from "@/components/StatusBadge";
import { ArrowRight } from "@/components/icons";
import { SITE, REPOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Dev4AIBots on GitHub: holo-racer and Pramaan are real projects; the rest are learning builds from coursework — each honestly described for what it is.",
  alternates: { canonical: "/open-source" },
  openGraph: {
    title: "Open Source · Dev4AIBots",
    description:
      "Real projects and learning builds, each honestly described for what it is.",
    url: `${SITE.domain}/open-source`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Open Source · Dev4AIBots",
    description:
      "Real projects and learning builds, each honestly described for what it is.",
  },
};

const LEARNING_BUILDS = [
  {
    name: "enterprise-rag-engine",
    what: "Production RAG chatbot skeleton — reference build from coursework.",
  },
  {
    name: "agentic-cli-workspace",
    what: "Terminal-native coding agent — reference build from coursework.",
  },
  {
    name: "semantic-code-search",
    what: "RAG over a codebase — reference build from coursework.",
  },
  {
    name: "realtime-voice-ai",
    what: "Realtime voice assistant — reference build from coursework.",
  },
  {
    name: "infra-diagnostics-agent",
    what: "DevOps troubleshooting agent — reference build from coursework.",
  },
  {
    name: "deep-research-orchestrator",
    what: "Multi-agent research pipeline — reference build from coursework.",
  },
  {
    name: "multimodal-vision-qa",
    what: "Document visual Q&A — reference build from coursework.",
  },
  {
    name: "mcp-tool-registry",
    what: "Internal MCP tool registry — reference build from coursework.",
  },
  {
    name: "llm-finetuning-framework",
    what: "Fine-tuning scaffolding — reference build from coursework.",
  },
];

export default function OpenSource() {
  return (
    <>
      <section className="hero" aria-labelledby="oss-title">
        <div className="container">
          <span className="section-label">open source</span>
          <h1 id="oss-title">Our code, labeled for what it actually is.</h1>
          <p className="lede">
            Everything public lives at{" "}
            <a href={SITE.github} target="_blank" rel="noopener noreferrer">
              github.com/dev4aibots
            </a>
            . Two repositories are real projects; the rest are learning builds
            from coursework and tutorials. We label them that way because a
            reviewer who opens a repo should find exactly what we said
            they&apos;d find.
          </p>
          <div className="note-box">
            <strong>Licensing.</strong> These repositories are public for
            reading and learning; formal open-source license files are being
            added. Until then, treat them as source-available, all rights
            reserved.
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="real">
        <div className="container">
          <span className="section-label">real projects</span>
          <h2 id="real">Which repositories are real projects?</h2>
          <div className="bento">
            <article className="bento-main">
              <StatusBadge status="working" />
              <h3>holo-racer</h3>
              <p>
                Webcam-controlled 3D racing game. Vite + TypeScript + Three.js,
                MediaPipe hand tracking in a Web Worker, geometric gesture
                pipeline, production deploys on Vercel. Our strongest
                engineering artifact — the one we point reviewers at first.
              </p>
              <div className="bento-foot">
                <a
                  className="card-link"
                  href={REPOS.holoRacer}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/dev4aibots/holo-racer <ArrowRight size={16} />
                </a>
                <a
                  className="card-link"
                  href={REPOS.holoRacerLive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo <ArrowRight size={16} />
                </a>
              </div>
            </article>
            <div className="bento-side">
              <article className="bento-cell">
                <StatusBadge status="development" />
                <h3>Pramaan</h3>
                <p>
                  Self-hosted multi-modal RAG evidence engine in Python.
                  Authorization before retrieval, hybrid search with
                  reranking, claim verification. Real project structure; in
                  active development.
                </p>
                <div className="bento-foot">
                  <a
                    className="card-link"
                    href={REPOS.pramaan}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/dev4aibots/Pramaan <ArrowRight size={16} />
                  </a>
                </div>
              </article>
              <article className="bento-cell">
                <StatusBadge status="development" />
                <h3>Platform apps</h3>
                <p>
                  The business and customer app repositories are not public
                  yet. They will be listed here when published — not before.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="learning">
        <div className="container">
          <span className="section-label">learning builds</span>
          <h2 id="learning">What are the other repositories?</h2>
          <p className="lede">
            Reference implementations — real files, real structure, built to
            learn a pattern. They are <strong>not</strong> production systems,
            and we do not present them as such.
          </p>
          <div className="table-wrap">
            <table>
              <caption>Learning builds — reference implementations</caption>
              <thead>
                <tr>
                  <th scope="col">Repository</th>
                  <th scope="col">What it is</th>
                </tr>
              </thead>
              <tbody>
                {LEARNING_BUILDS.map((r) => (
                  <tr key={r.name}>
                    <td>
                      <a
                        href={`${SITE.github}/${r.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: "var(--mono)", fontSize: "0.85rem" }}
                      >
                        {r.name}
                      </a>
                    </td>
                    <td className="muted-cell">{r.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
