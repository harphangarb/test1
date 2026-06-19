import { TourPage } from "@/data/tourData";

interface Props {
  page: TourPage;
  onNext: () => void;
  onPrev: () => void;
  step: number;
  total: number;
}

export default function HistoryPage({ page, onNext, onPrev: _onPrev, step: _step, total: _total }: Props) {
  const paragraphs = page.content?.split("\n\n") ?? [];
  return (
    <div className="inner-page">
      <div className="inner-hero history-hero">
        <div className="inner-hero-overlay" />
        <div className="inner-hero-text">
          <span className="phase-label">Phase 1 · Induction</span>
          <h2 className="inner-title">{page.title}</h2>
        </div>
      </div>
      <div className="inner-body">
        {paragraphs.map((p, i) => (
          <p key={i} className="body-text">{p}</p>
        ))}
      </div>
      <div className="navbar">
        <button className="nav-next" onClick={onNext} aria-label="First plane">
          FIRST PLANE →
        </button>
      </div>
    </div>
  );
}
