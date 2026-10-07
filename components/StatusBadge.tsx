type StatusKind = "working" | "development" | "roadmap";

const LABELS: Record<StatusKind, string> = {
  working: "Working",
  development: "In development",
  roadmap: "Roadmap",
};

export default function StatusBadge({
  status,
  note,
}: {
  status: StatusKind;
  note?: string;
}) {
  const label = note ? `${LABELS[status]} — ${note}` : LABELS[status];
  return (
    <span className={`badge badge-${status}`} title={label}>
      {LABELS[status]}
    </span>
  );
}
