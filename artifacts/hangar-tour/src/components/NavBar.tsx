interface Props {
  step: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  prevLabel?: string;
  nextLabel?: string;
}

export default function NavBar({
  step,
  total,
  onNext,
  onPrev,
  prevLabel = "← PREVIOUS",
  nextLabel = "NEXT →",
}: Props) {
  const isFirst = step === 0;
  const isLast = step === total - 1;

  return (
    <div className="navbar">
      <button
        className="nav-prev"
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Previous"
      >
        {prevLabel}
      </button>
      <button
        className="nav-next"
        onClick={onNext}
        disabled={isLast}
        aria-label="Next"
      >
        {nextLabel}
      </button>
    </div>
  );
}
