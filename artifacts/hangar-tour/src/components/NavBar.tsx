interface Props {
  step: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function NavBar({ step, total, onNext, onPrev }: Props) {
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
        ← PREVIOUS
      </button>
      <button
        className="nav-next"
        onClick={onNext}
        disabled={isLast}
        aria-label="Next"
      >
        NEXT →
      </button>
    </div>
  );
}
