import type { Metadata } from "next";
import { ArrowRight } from "@/components/icons";
import { SITE, REPOS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Dev4AIBots on GitHub: holo-racer, Pramaan, enterprise-rag-engine, realtime-voice-ai, mcp-tool-registry, and deep-research-orchestrator — each repository described for what it is and does.",
  alternates: { canonical: "/open-source" },
  openGraph: {
    title: "Our Work · Dev4AIBots",
    description:
      "Open-source repositories from Dev4AIBots — described for what they are and what they do.",
    url: `${SITE.domain}/open-source`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Our Work · Dev4AIBots",
    description:
      "Open-source repositories from Dev4AIBots — described for what they are and what they do.",
  },
};

const WORK = [
  {
    name: "holo-racer",
    what: "A 3D racing game you steer with hand gestures, tracked live from your webcam.",
    stack: "TypeScript, Three.js, MediaPipe",
    href: REPOS.holoRacer,
  },
  {
    name: "Pramaan",
    what: "A multi-modal RAG engine that answers questions with cited evidence.",
    stack: "Python",
    href: REPOS.pramaan,
  },
  {
    name: "enterprise-rag-engine",
    what: "Reference implementation of a RAG chatbot with an evaluation harness.",
    stack: "TypeScript",
    href: `${SITE.github}/enterprise-rag-engine`,
  },
  {
    name: "realtime-voice-ai",
    what: "Low-latency conversational voice AI pipeline over WebSockets.",
    stack: "JavaScript, WebSockets",
    href: `${SITE.github}/realtime-voice-ai`,
  },
  {
    name: "mcp-tool-registry",
    what: "A registry standardizing tool execution via the Model Context Protocol.",
    stack: "TypeScript",
    href: `${SITE.github}/mcp-tool-registry`,
  },
  {
    name: "deep-research-orchestrator",
    what: "Multi-agent orchestration for long-horizon research tasks.",
    stack: "Python",
    href: `${SITE.github}/deep-research-orchestrator`,
  },
];

export default function OpenSource() {
  return (
    <>
      <section className="hero" aria-labelledby="oss-title">
        <div className="container">
          <span className="section-label">open source</span>
          <h1 id="oss-title">Our work, in public.</h1>
          <p className="lede">
            Alongside the platform, Dev4AIBots publishes open-source work at{" "}
            <a href={SITE.github} target="_blank" rel="noopener noreferrer">
              github.com/dev4aibots
            </a>
            . Each repository below is described for what it is and what it
            does — nothing more.
          </p>
          <div className="note-box">
            <strong>Licensing.</strong> These repositories are public for
            reading and learning; formal open-source license files are being
            added. Until then, treat them as source-available, all rights
            reserved.
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="repos">
        <div className="container">
          <span className="section-label">repositories</span>
          <h2 id="repos">What we publish.</h2>
          <div className="table-wrap">
            <table>
              <caption>Dev4AIBots open-source repositories</caption>
              <thead>
                <tr>
                  <th scope="col">Repository</th>
                  <th scope="col">What it is</th>
                  <th scope="col">Built with</th>
                </tr>
              </thead>
              <tbody>
                {WORK.map((r) => (
                  <tr key={r.name}>
                    <td>
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontFamily: "var(--mono)", fontSize: "0.85rem" }}
                      >
                        {r.name}
                      </a>
                    </td>
                    <td className="muted-cell">{r.what}</td>
                    <td className="muted-cell">{r.stack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <a
              className="card-link"
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              All repositories on GitHub <ArrowRight size={16} />
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
