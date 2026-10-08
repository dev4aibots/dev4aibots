// How the two-app platform works — hand-built SVG, no image assets.
// Archetype A tokens: cobalt accent, hairline borders, sentence-case labels.
export default function TwoAppDiagram() {
  const ink = "#f4f4f5";
  const muted = "#a1a1aa";
  const faint = "#71717a";
  const accent = "#3b82f6";
  const line = "rgba(255,255,255,0.14)";
  const boxFill = "#121215";
  const titleFont =
    "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace";
  const bodyFont =
    "var(--font-inter), ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

  const bullets = (x: number, y: number, items: string[]) =>
    items.map((t, i) => (
      <g key={t}>
        <rect
          x={x}
          y={y + i * 30 - 3.5}
          width={7}
          height={7}
          rx={2}
          fill={accent}
          opacity={0.75}
        />
        <text
          x={x + 14}
          y={y + i * 30 + 4.5}
          fill={muted}
          fontSize={13}
          fontFamily={bodyFont}
        >
          {t}
        </text>
      </g>
    ));

  return (
    <div className="diagram">
      <svg
        viewBox="0 0 960 460"
        role="img"
        aria-labelledby="diagram-title diagram-desc"
      >
        <title id="diagram-title">How the two-app platform works</title>
        <desc id="diagram-desc">
          The business owner uses the business app to customize a branded
          customer app, write announcements, and manage services. The
          Dev4AIBots platform provisions a business code and QR. Customers
          install the free customer app and join via the code, QR, or link to
          chat with AI assistants, book appointments, and leave reviews, which
          flow back to the business app.
        </desc>
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={accent} />
          </marker>
          <marker
            id="arrowBack"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={faint} />
          </marker>
        </defs>

        {/* Business app box */}
        <rect
          x={20}
          y={80}
          width={270}
          height={280}
          rx={14}
          fill={boxFill}
          stroke={line}
          strokeWidth={1}
        />
        <text
          x={40}
          y={116}
          fill={faint}
          fontSize={11.5}
          fontFamily={titleFont}
        >
          For the business
        </text>
        <text
          x={40}
          y={146}
          fill={ink}
          fontSize={19}
          fontWeight={700}
          fontFamily={bodyFont}
        >
          Business app
        </text>
        <text x={40} y={170} fill={faint} fontSize={12.5} fontFamily={bodyFont}>
          Paid plans · owner console
        </text>
        {bullets(40, 200, [
          "Customize app theme & branding",
          "Write announcements",
          "Manage services & bookings",
          "Read reviews, run automations",
        ])}

        {/* Platform hub */}
        <rect
          x={390}
          y={130}
          width={180}
          height={180}
          rx={14}
          fill={boxFill}
          stroke={accent}
          strokeWidth={1.5}
        />
        <text
          x={480}
          y={168}
          fill={accent}
          fontSize={11.5}
          fontFamily={titleFont}
          textAnchor="middle"
        >
          Dev4AIBots
        </text>
        <text
          x={480}
          y={196}
          fill={ink}
          fontSize={19}
          fontWeight={700}
          fontFamily={bodyFont}
          textAnchor="middle"
        >
          Platform
        </text>
        <text
          x={480}
          y={222}
          fill={faint}
          fontSize={12.5}
          fontFamily={bodyFont}
          textAnchor="middle"
        >
          issues business code + QR
        </text>
        <text
          x={480}
          y={244}
          fill={faint}
          fontSize={12.5}
          fontFamily={bodyFont}
          textAnchor="middle"
        >
          hosts data &amp; messaging
        </text>
        <text
          x={480}
          y={284}
          fill={faint}
          fontSize={12}
          fontFamily={titleFont}
          textAnchor="middle"
        >
          status: in development
        </text>

        {/* Customer app box */}
        <rect
          x={670}
          y={80}
          width={270}
          height={280}
          rx={14}
          fill={boxFill}
          stroke={line}
          strokeWidth={1}
        />
        <text
          x={690}
          y={116}
          fill={faint}
          fontSize={11.5}
          fontFamily={titleFont}
        >
          For the customer
        </text>
        <text
          x={690}
          y={146}
          fill={ink}
          fontSize={19}
          fontWeight={700}
          fontFamily={bodyFont}
        >
          Customer app
        </text>
        <text x={690} y={170} fill={faint} fontSize={12.5} fontFamily={bodyFont}>
          Free forever · join via code / QR / link
        </text>
        {bullets(690, 200, [
          "AI chatbots answer questions",
          "One-click appointment booking",
          "Announcements from the business",
          "Local reviews",
        ])}

        {/* Flow arrows */}
        <line
          x1={290}
          y1={200}
          x2={382}
          y2={200}
          stroke={accent}
          strokeWidth={2}
          markerEnd="url(#arrow)"
        />
        <text
          x={336}
          y={188}
          fill={accent}
          fontSize={12}
          fontFamily={bodyFont}
          textAnchor="middle"
        >
          publishes branded app
        </text>
        <line
          x1={570}
          y1={200}
          x2={662}
          y2={200}
          stroke={accent}
          strokeWidth={2}
          markerEnd="url(#arrow)"
        />
        <text
          x={616}
          y={188}
          fill={accent}
          fontSize={12}
          fontFamily={bodyFont}
          textAnchor="middle"
        >
          code / QR / link
        </text>

        {/* Return path */}
        <path
          d="M 805 360 C 805 420, 480 420, 155 420 C 90 420, 60 400, 60 360 L 60 330"
          fill="none"
          stroke={line}
          strokeWidth={2}
          strokeDasharray="6 5"
          markerEnd="url(#arrowBack)"
        />
        <text
          x={430}
          y={412}
          fill={faint}
          fontSize={12.5}
          fontFamily={bodyFont}
          textAnchor="middle"
        >
          bookings · reviews · messages flow back to the business (planned)
        </text>
      </svg>
    </div>
  );
}
