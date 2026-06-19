import { TourPage } from "@/data/tourData";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
import Header from "@/components/Header";
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
  const planeNumber = page.id - 2;
  const totalPlanes = 16;

  return (
    <div className="inner-page">
      <Header step={step} total={total} />
      <ProgressBar step={step} total={total} />

      <div className="plane-image-wrap">
        {imgSrc ? (
          <img src={imgSrc} alt={page.title} className="plane-img" />
        ) : (
          <div className="plane-img-placeholder">
            <span className="placeholder-icon">✈</span>
          </div>
        )}
        <div className="plane-image-overlay" />
        <div className="plane-num-badge">
          <span className="plane-num-text">{planeNumber} / {totalPlanes}</span>
        </div>
      </div>

      <div className="inner-body">
        <span className="phase-label">{page.phase}</span>
        <h2 className="plane-title">{page.title}</h2>
        {page.subtitle && <p className="plane-subtitle">{page.subtitle}</p>}

        <div className="specs-grid">
          <div className="spec-cell">
            <span className="spec-label">BuNo</span>
            <span className="spec-value">{page.buno ?? "—"}</span>
          </div>
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

        <div className="plane-columns">
          <div className="plane-col-main">
            {page.serviceHistory && (
              <>
                <h3 className="section-heading">SERVICE HISTORY</h3>
                <p className="body-text">{page.serviceHistory}</p>
              </>
            )}
            {page.specs && page.specs.length > 2 && (
              <div className="extra-specs">
                {page.specs.slice(2).map((s) => (
                  <div key={s.label} className="extra-spec-row">
                    <span className="extra-spec-label">{s.label}:</span>
                    <span className="extra-spec-value">{s.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="plane-col-aside">
            {page.harpFact && (
              <div className="harp-box">
                <div className="harp-box-header">
                  <span className="harp-anchor">⚓</span>
                  <span className="harp-label">H.A.R.P. FACT</span>
                </div>
                <p className="harp-text">{page.harpFact}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <NavBar
        step={step}
        total={total}
        onNext={onNext}
        onPrev={onPrev}
        prevLabel="← PREV PLANE"
        nextLabel="NEXT PLANE →"
      />
    </div>
  );
}
