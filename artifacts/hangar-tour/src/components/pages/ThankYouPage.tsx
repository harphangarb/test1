import { TourPage } from "@/data/tourData";

interface Props {
  page: TourPage;
  onRestart: () => void;
}

export default function ThankYouPage({ page, onRestart }: Props) {
  const paragraphs = page.content?.split("\n\n") ?? [];
  return (
    <div className="thankyou-page">
      <div className="thankyou-bg" />
      <div className="thankyou-content">
        <h2 className="thankyou-title">Thank You for Visiting</h2>
        <p className="thankyou-from">from the H.A.R.P. Volunteers</p>
        <div className="thankyou-divider" />
        <div className="thankyou-body">
          {paragraphs.map((p, i) => (
            <p key={i} className="body-text">{p}</p>
          ))}
        </div>
        <div className="donate-box">
          <p className="donate-heading">SUPPORT H.A.R.P.</p>
          <p className="donate-text">
            If you want to support H.A.R.P., find out more at the information stand at the entrance/exit or ask a volunteer!
          </p>
          <a
            href="https://www.instagram.com/harphangarb/"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-link"
          >
            Follow us on Instagram →
          </a>
        </div>
        <div className="thankyou-nav">
          <button className="nav-next reset-btn" onClick={onRestart} aria-label="Reset tour">
            END &amp; RESET TOUR ↺
          </button>
        </div>
      </div>
    </div>
  );
}
