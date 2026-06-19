import { TourPage } from "@/data/tourData";

interface Props {
  page: TourPage;
  onStart: () => void;
}

export default function WelcomePage({ page, onStart }: Props) {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="welcome-logo-circle">
          <img src="/harp-logo.png" alt="H.A.R.P. Logo" className="welcome-logo-img" />
        </div>
        <div className="welcome-logo-area">
          <h1 className="welcome-title">{page.title}</h1>
          {page.subtitle && <p className="welcome-subtitle">{page.subtitle}</p>}
        </div>
        <div className="welcome-divider" />
        <div className="welcome-disclaimer">
          <p className="disclaimer-label">SAFETY BRIEFING</p>
          <p className="disclaimer-text">{page.content}</p>
        </div>
        <button className="start-btn" onClick={onStart}>
          <span>START TOUR</span>
          <span className="start-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
