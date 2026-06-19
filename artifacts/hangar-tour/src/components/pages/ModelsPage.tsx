import { TourPage } from "@/data/tourData";
import NavBar from "@/components/NavBar";

interface Props {
  page: TourPage;
  onNext: () => void;
  onPrev: () => void;
  step: number;
  total: number;
}

export default function ModelsPage({ page, onNext, onPrev, step, total }: Props) {
  const paragraphs = page.content?.split("\n\n") ?? [];
  return (
    <div className="inner-page">
      <div className="inner-hero models-hero">
        <div className="inner-hero-overlay" />
        <div className="inner-hero-text">
          <h2 className="inner-title">{page.title}</h2>
        </div>
      </div>
      <div className="inner-body">
        {paragraphs.map((p, i) => (
          <p key={i} className="body-text">{p}</p>
        ))}
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
