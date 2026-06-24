import { useState, useEffect } from "react";
import { PlaneImage } from "@/data/planeImages";

interface Props {
  images: PlaneImage[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  // Instantly unmount/hide the old image frame when the page changes
  useEffect(() => {
    setIsChanging(true);
    setCurrent(0);

    const timer = setTimeout(() => setIsChanging(false), 30);
    return () => clearTimeout(timer);
  }, [images]);

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent(i => (i - 1 + images.length) % images.length);
  };
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrent(i => (i + 1) % images.length);
  };

  const img = images[current] || images[0];
  if (!img) return null;

  return (
    <>
      <div className="plane-image-wrap carousel-wrap" onClick={() => setLightboxOpen(true)}>
        {!isChanging ? (
          <img src={img.src} alt={alt} className="plane-img" loading="eager" />
        ) : (
          <div className="plane-img-placeholder" style={{ minHeight: '300px', background: '#0A192F' }} />
        )}
        <div className="plane-image-overlay" />

        {images.length > 1 && (
          <>
            <button
              className="carousel-btn carousel-btn--prev"
              onClick={prev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="carousel-btn carousel-btn--next"
              onClick={next}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="carousel-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === current ? " carousel-dot--active" : ""}`}
                  onClick={e => { e.stopPropagation(); setCurrent(i); }}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div className="carousel-tap-hint">TAP TO EXPAND</div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>

          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={img.src} alt={alt} className="lightbox-img" />

            {images.length > 1 && (
              <div className="lightbox-nav">
                <button className="lightbox-prev" onClick={prev}>‹</button>
                <span className="lightbox-counter">{current + 1} / {images.length}</span>
                <button className="lightbox-next" onClick={next}>›</button>
              </div>
            )}

            {img.caption && (
              <p className="lightbox-caption">{img.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}