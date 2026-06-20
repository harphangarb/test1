import { TourPage } from "@/data/tourData";
import NavBar from "@/components/NavBar";
import { planeImages } from "@/data/planeImages";

interface Props {
  page: TourPage;
  onNext: () => void;
  onPrev: () => void;
  step: number;
  total: number;
}

export default function PlanePage({ page, onNext, onPrev, step, total }: Props) {
  const imgSrc = planeImages[page.id] ?? null;
  const isYellowPlane = page.id === 3;
  const showBuno = page.buno && page.buno !== "N/A";

  return (
    <div className="inner-page">
      <div className="plane-image-wrap">
        {imgSrc ? (
          <img src={imgSrc} alt={page.title} className="plane-img" />
        ) : (
          <div className="plane-img-placeholder">
            <span className="placeholder-icon">✈</span>
          </div>
        )}
        <div className="plane-image-overlay" />
      </div>

      <div className="inner-body">
        <h2 className="plane-title">{page.title}</h2>
        {page.subtitle && <p className="plane-subtitle">{page.subtitle}</p>}

        {!isYellowPlane && (
          <div className="specs-grid">
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
              <span className="spec-label">Wingspan</span>
              <span className="spec-value">{page.span ?? "—"}</span>
            </div>
          </div>
        )}

        {page.serviceHistory && (
          <div className="section-block">
            <h3 className="section-heading">{isYellowPlane ? "OVERVIEW" : "SERVICE HISTORY"}</h3>
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
