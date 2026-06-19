import { TourPage } from "@/data/tourData";
import { AnchorIcon } from "@/components/icons/AnchorIcon";

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
        <div className="thankyou-badge">
          <AnchorIcon />
        </div>
        <h2 className="thankyou-title">{page.title}</h2>
        {page.subtitle && <p className="thankyou-subtitle">{page.subtitle}</p>}
        <div className="thankyou-divider" />
        <div className="thankyou-body">
          {paragraphs.map((p, i) => (
            <p key={i} className="body-text">{p}</p>
          ))}
        </div>
        <div className="donate-box">
          <p className="donate-heading">SUPPORT H.A.R.P.</p>
          <p className="donate-text">
            Donations fund tools, materials, and training for the volunteers who keep this history alive.
          </p>
          <a
            href="https://www.nps.gov/flbe/index.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-link"
          >
            Learn More &amp; Donate →
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
