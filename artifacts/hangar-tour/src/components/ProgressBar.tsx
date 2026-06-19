interface Props {
  step: number;
  total: number;
}

export default function ProgressBar({ step, total }: Props) {
  const pct = Math.round(((step + 1) / total) * 100);
  return (
    <div className="progress-wrap">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="progress-label">{step + 1} / {total}</span>
    </div>
  );
}
