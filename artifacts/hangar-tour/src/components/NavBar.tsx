import { useEffect } from "react";
import { planeImages } from "@/data/planeImages";

interface Props {
  step: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  prevLabel?: string;
  nextLabel?: string;
}

function splitPrev(label: string) {
  const m = label.match(/^(←)\s*(.+)$/);
  return m ? { arrow: m[1], text: m[2] } : { arrow: "", text: label };
}

function splitNext(label: string) {
  const m = label.match(/^(.+?)\s*(→)$/);
  return m ? { arrow: m[2], text: m[1] } : { arrow: "", text: label };
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
  const prev = splitPrev(prevLabel);
  const next = splitNext(nextLabel);

  // Background Preloader Engine
  useEffect(() => {
    // Determine the upcoming index (plane indexes generally map directly to tour steps)
    const nextStepIndex = step + 1;
    const nextPlaneData = planeImages[nextStepIndex];

    if (nextPlaneData) {
      // Resolve source whether data signature is structured string or image object array
      const targetSrc = Array.isArray(nextPlaneData)
        ? nextPlaneData[0]?.src
        : nextPlaneData;

      if (targetSrc) {
        const preloadImage = new Image();
        preloadImage.src = targetSrc;
      }
    }
  }, [step]);

  return (
    <div className="navbar">
      <button
        className="nav-prev"
        onClick={onPrev}
        disabled={isFirst}
        aria-label="Previous"
      >
        <span className="btn-text">{prev.text}</span>
        <span className="btn-arrow">{prev.arrow}</span>
      </button>
      <button
        className="nav-next"
        onClick={onNext}
        disabled={isLast}
        aria-label="Next"
      >
        <span className="btn-text">{next.text}</span>
        <span className="btn-arrow">{next.arrow}</span>
      </button>
    </div>
  );
}
