import { TourPage } from "@/data/tourData";
import NavBar from "@/components/NavBar";
import ProgressBar from "@/components/ProgressBar";
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

        {page.specs && page.specs.length > 0 && (
          <div className="specs-banner">
            {page.specs.map((s) => (
              <div key={s.label} className="spec-item">
                <span className="spec-label">{s.label}</span>
                <span className="spec-value">{s.value}</span>
              </div>
            ))}
          </div>
        )}

        {page.serviceHistory && (
          <div className="section-block">
            <h3 className="section-heading">SERVICE HISTORY</h3>
            <p className="body-text">{page.serviceHistory}</p>
          </div>
        )}

        {page.harpFact && (
          <div className="harp-box">
            <div className="harp-box-header">
              <span className="harp-anchor">⚓</span>
              <span className="harp-label">H.A.R.P. VOLUNTEER FACT</span>
            </div>
            <p className="harp-text">{page.harpFact}</p>
          </div>
        )}
      </div>

      <NavBar step={step} total={total} onNext={onNext} onPrev={onPrev} />
    </div>
  );
}
