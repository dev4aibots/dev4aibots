// How the two-app platform works — hand-built SVG, no image assets.
export default function TwoAppDiagram() {
  const ink = "#e9edf3";
  const muted = "#a3adbd";
  const faint = "#7f8a9c";
  const accent = "#2fd6b5";
  const line = "#2a3342";
  const boxFill = "#0d1016";
  const titleFont = "ui-monospace, SFMono-Regular, Menlo, monospace";
  const bodyFont =
    "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

  const bullets = (x: number, y: number, items: string[]) =>
    items.map((t, i) => (
      <g key={t}>
        <circle cx={x} cy={y + i * 30} r={3} fill={accent} />
        <text
          x={x + 12}
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
            <path d="M 0 0 L 10 5 L 0 10 z" fill={muted} />
          </marker>
        </defs>

        {/* Business app box */}
        <rect x={20} y={80} width={270} height={280} rx={10} fill={boxFill} stroke={line} strokeWidth={1.5} />
        <text x={40} y={116} fill={faint} fontSize={11.5} fontFamily={titleFont} letterSpacing={1.5}>
          FOR THE BUSINESS
        </text>
        <text x={40} y={146} fill={ink} fontSize={19} fontWeight={700} fontFamily={bodyFont}>
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
        <rect x={390} y={130} width={180} height={180} rx={10} fill={boxFill} stroke={accent} strokeWidth={1.5} />
        <text x={480} y={168} fill={accent} fontSize={11.5} fontFamily={titleFont} letterSpacing={1.5} textAnchor="middle">
          DEV4AIBOTS
        </text>
        <text x={480} y={196} fill={ink} fontSize={19} fontWeight={700} fontFamily={bodyFont} textAnchor="middle">
          Platform
        </text>
        <text x={480} y={222} fill={faint} fontSize={12.5} fontFamily={bodyFont} textAnchor="middle">
          issues business code + QR
        </text>
        <text x={480} y={244} fill={faint} fontSize={12.5} fontFamily={bodyFont} textAnchor="middle">
          hosts data &amp; messaging
        </text>
        <text x={480} y={284} fill={faint} fontSize={12} fontFamily={titleFont} textAnchor="middle">
          STATUS: IN DEVELOPMENT
        </text>

        {/* Customer app box */}
        <rect x={670} y={80} width={270} height={280} rx={10} fill={boxFill} stroke={line} strokeWidth={1.5} />
        <text x={690} y={116} fill={faint} fontSize={11.5} fontFamily={titleFont} letterSpacing={1.5}>
          FOR THE CUSTOMER
        </text>
        <text x={690} y={146} fill={ink} fontSize={19} fontWeight={700} fontFamily={bodyFont}>
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
        <line x1={290} y1={200} x2={382} y2={200} stroke={accent} strokeWidth={2} markerEnd="url(#arrow)" />
        <text x={336} y={188} fill={accent} fontSize={12} fontFamily={bodyFont} textAnchor="middle">
          publishes branded app
        </text>
        <line x1={570} y1={200} x2={662} y2={200} stroke={accent} strokeWidth={2} markerEnd="url(#arrow)" />
        <text x={616} y={188} fill={accent} fontSize={12} fontFamily={bodyFont} textAnchor="middle">
          code / QR / link
        </text>

        {/* Return path */}
        <path
          d="M 805 360 C 805 420, 480 420, 155 420 C 90 420, 60 400, 60 360 L 60 330"
          fill="none"
          stroke={line}
          strokeWidth={2}
          strokeDasharray="6 5"
        />
        <text x={430} y={412} fill={faint} fontSize={12.5} fontFamily={bodyFont} textAnchor="middle">
          bookings · reviews · messages flow back to the business
        </text>
        <text x={52} y={352} fill={faint} fontSize={11} fontFamily={bodyFont} transform="rotate(0)">
          (planned)
        </text>
      </svg>
    </div>
  );
}
