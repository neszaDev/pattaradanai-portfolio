"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useState } from "react";
import type { ProjectScreenshot } from "@/data/content";

type ProjectGalleryProps = { title: string; screenshots: ProjectScreenshot[] };

export function ProjectGallery({ title, screenshots }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const current = screenshots[currentIndex];
  const hasMultiple = screenshots.length > 1;

  const move = useCallback((direction: 1 | -1) => {
    setCurrentIndex((index) => (index + direction + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  if (!current) return null;

  return (
    <section className="project-gallery" aria-label={`${title} screenshots`}>
      <div
        className="project-gallery__stage"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} image carousel`}
        tabIndex={hasMultiple ? 0 : undefined}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") move(-1);
          if (event.key === "ArrowRight") move(1);
        }}
        onTouchStart={(event) => setTouchStart(event.changedTouches[0]?.clientX ?? null)}
        onTouchEnd={(event) => {
          if (touchStart === null) return;
          const touchEnd = event.changedTouches[0]?.clientX ?? touchStart;
          const distance = touchEnd - touchStart;
          if (Math.abs(distance) > 48) move(distance > 0 ? -1 : 1);
          setTouchStart(null);
        }}
      >
        <Image className="project-gallery__image" src={current.src} alt={current.alt} fill sizes="(max-width: 760px) calc(100vw - 32px), 1200px" priority={currentIndex === 0} />
      </div>
      <div className="project-gallery__underlay">
        <div className="project-gallery__copy" aria-live="polite">
          <span className="project-gallery__count">{String(currentIndex + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}</span>
          <p>{current.caption}</p>
        </div>
        {hasMultiple ? (
          <div className="project-gallery__controls">
            <button type="button" className="project-gallery__arrow" onClick={() => move(-1)} aria-label="Show previous project image"><ArrowLeft size={18} aria-hidden="true" /></button>
            <div className="project-gallery__dots" aria-label="Choose project image">
              {screenshots.map((screenshot, index) => <button type="button" className="project-gallery__dot" key={screenshot.src} onClick={() => setCurrentIndex(index)} aria-label={`Show image ${index + 1}`} aria-current={index === currentIndex ? "true" : undefined} />)}
            </div>
            <button type="button" className="project-gallery__arrow" onClick={() => move(1)} aria-label="Show next project image"><ArrowRight size={18} aria-hidden="true" /></button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
