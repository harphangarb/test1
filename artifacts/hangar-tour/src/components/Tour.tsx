import { useState, useEffect, useRef } from "react";
import { tourPages, TourPage } from "@/data/tourData";
import WelcomePage from "@/components/pages/WelcomePage";
import HistoryPage from "@/components/pages/HistoryPage";
import PlanePage from "@/components/pages/PlanePage";
import ModelsPage from "@/components/pages/ModelsPage";
import ThankYouPage from "@/components/pages/ThankYouPage";

export default function Tour() {
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const page = tourPages[currentStep];

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [currentStep]);

  const goNext = () => {
    if (currentStep < tourPages.length - 1) setCurrentStep((s) => s + 1);
  };

  const goPrev = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const restart = () => setCurrentStep(0);

  const renderPage = (p: TourPage) => {
    switch (p.type) {
      case "welcome":
        return <WelcomePage page={p} onStart={goNext} />;
      case "history":
        return (
          <HistoryPage page={p} onNext={goNext} onPrev={goPrev} step={currentStep} total={tourPages.length} />
        );
      case "plane":
        return (
          <PlanePage page={p} onNext={goNext} onPrev={goPrev} step={currentStep} total={tourPages.length} />
        );
      case "models":
        return (
          <ModelsPage page={p} onNext={goNext} onPrev={goPrev} step={currentStep} total={tourPages.length} />
        );
      case "thankyou":
        return <ThankYouPage page={p} onRestart={restart} />;
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="tour-container">
      {renderPage(page)}
    </div>
  );
}
