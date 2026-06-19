interface Props {
  step: number;
  total: number;
}

export default function Header({ step, total }: Props) {
  return (
    <div className="site-header">
      <span className="site-header-title">Naval Air Station New York Tour</span>
      <span className="site-header-page">Page {step + 1} of {total}</span>
    </div>
  );
}
