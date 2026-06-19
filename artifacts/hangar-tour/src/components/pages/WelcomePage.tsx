import { TourPage } from "@/data/tourData";

interface Props {
  page: TourPage;
  onStart: () => void;
}

export default function WelcomePage({ page, onStart }: Props) {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="welcome-logo-area">
          <h1 className="welcome-title">{page.title}</h1>
          {page.subtitle && <p className="welcome-subtitle">{page.subtitle}</p>}
        </div>
        <div className="welcome-divider" />
        <div className="welcome-disclaimer">
          <p className="disclaimer-label text-[16px]">NOTE:</p>
          <p className="disclaimer-text text-[16px]">{page.content}</p>
        </div>
        <button className="start-btn" onClick={onStart}>
          <span>START TOUR</span>
          <span className="start-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
