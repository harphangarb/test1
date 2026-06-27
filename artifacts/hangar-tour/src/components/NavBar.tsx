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

  // 1. Get current plane data safely to check its ID property
  const currentPlaneData = planeImages[step];
  const currentPlaneId = currentPlaneData && typeof currentPlaneData === 'object' && !Array.isArray(currentPlaneData)
    ? (currentPlaneData as any).id 
    : Array.isArray(currentPlaneData) ? currentPlaneData[0]?.id : null;

  // 2. Check if it matches step 19, step 18 (if 0-indexed), or explicit ID 19
  const isTourFinishStep = step === 19 || step === 18 || currentPlaneId === 19;

  // 3. Swap the label based on the flag
  const dynamicNextLabel = isTourFinishStep ? "Finish Tour" : nextLabel;

  const prev = splitPrev(prevLabel);
  const next = splitNext(dynamicNextLabel);

  // Background Preloader Engine
  useEffect(() => {
    const nextStepIndex = step + 1;
    const nextPlaneData = planeImages[nextStepIndex];

    if (nextPlaneData) {
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
        aria-label={isTourFinishStep ? "Finish Tour" : "Next"}
      >
        <span className="btn-text">{next.text}</span>
        {next.arrow && <span className="btn-arrow">{next.arrow}</span>}
      </button>
    </div>
  );
}