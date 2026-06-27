import { TourPage } from "@/data/tourData";
import NavBar from "@/components/NavBar";
import ImageCarousel from "@/components/ImageCarousel";
import { planeImages } from "@/data/planeImages";

interface Props {
  page: TourPage;
  onNext: () => void;
  onPrev: () => void;
  step: number;
  total: number;
}

export default function PlanePage({ page, onNext, onPrev, step, total }: Props) {
  const imgData = planeImages[page.id] ?? null;
  const isYellowPlane = page.id === 3;
  // Updated line: explicitly exclude ID 15 from showing BuNo
  const showBuno = page.buno && page.buno !== "N/A" && page.id !== 15;
  const isCarousel = Array.isArray(imgData);

  // Check if current item should display "Length" instead of "Wingspan" (IDs 8, 10, or 12)
  const useLengthLabel = page.id === 8 || page.id === 10 || page.id === 12;

  return (
    <div className="inner-page">
      {isCarousel ? (
        <ImageCarousel images={imgData} alt={page.title} />
      ) : (
        <div className="plane-image-wrap">
          {imgData ? (
            <img src={imgData as string} alt={page.title} className="plane-img" />
          ) : (
            <div className="plane-img-placeholder">
              <span className="placeholder-icon">✈</span>
            </div>
          )}
          <div className="plane-image-overlay" />
        </div>
      )}

      <div className="inner-body">
        <h2 className="plane-title">{page.title}</h2>
        {page.subtitle && <p className="plane-subtitle">{page.subtitle}</p>}

        {!isYellowPlane && (
          <div className={`specs-grid${!showBuno ? " specs-grid--3col" : ""}`}>
            {showBuno && (
              <div className="spec-cell">
                <span className="spec-label">BuNo</span>
                <span className="spec-value">{page.buno}</span>
              </div>
            )}
            <div className="spec-cell">
              <span className="spec-label">Role</span>
              <span className="spec-value">{page.specs?.[0]?.value ?? "—"}</span>
            </div>
            <div className="spec-cell">
              <span className="spec-label">Top Speed</span>
              <span className="spec-value">{page.specs?.[1]?.value ?? "—"}</span>
            </div>
            <div className="spec-cell">
              {/* Dynamically toggle between Length and Wingspan */}
              <span className="spec-label">{useLengthLabel ? "Length" : "Wingspan"}</span>
              <span className="spec-value">{page.span ?? "—"}</span>
            </div>
          </div>
        )}

        {page.serviceHistory && (
          <div className="section-block">
            <h3 className="section-heading">{isYellowPlane ? "OVERVIEW" : "Overview"}</h3>
            <p className="body-text">{page.serviceHistory}</p>
          </div>
        )}

        {page.harpFact && (
          <div className="harp-box">
            <div className="harp-box-header">
              <span className="harp-label">FUN FACT</span>
            </div>
            <p className="harp-text">{page.harpFact}</p>
          </div>
        )}
      </div>

      <NavBar
        step={step}
        total={total}
        onNext={onNext}
        onPrev={onPrev}
        prevLabel={step === 2 ? "← HISTORY" : "← PREV PLANE"}
        nextLabel="NEXT PLANE →"
      />
    </div>
  );
}