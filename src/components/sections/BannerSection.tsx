"use client";

import { useEffect, useState } from "react";
import Title from "../ui/Title";
import Image from "next/image";
// dot indicators only — left/right icons removed from this component

interface BannerSectionProps {
  images: string[];
  type?: "large" | "small";
  title: string;
  showArrows?: boolean;
  className?: string;
}

export function BannerSection({
  images,
  type = "large",
  title,
  showArrows = false,
  className,
}: BannerSectionProps) {
  const length = images?.length ?? 0;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // reset index if images change - only update if not already zero to avoid redundant state set
    if (index !== 0) setIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  const prev = () => setIndex((i) => (i - 1 + length) % length);
  const next = () => setIndex((i) => (i + 1) % length);
  const goToSlide = (i: number) => setIndex(i);
  return (
    <section
      className={`flex flex-col ${
        type === "small" ? "lg:w-60 lg:shrink-0" : "w-full"
      } ${className || ""}`}
    >
      <Title
        text={title}
        showArrows={showArrows}
        onPrevious={type === "large" ? prev : undefined}
        onNext={type === "large" ? next : undefined}
      />
      {type === "small" ? (
        // Small type: chỉ hiển thị banner đầu tiên
        <div className="overflow-hidden rounded-lg flex-1 relative min-h-60 cursor-pointer">
          <Image
            src={images[0]}
            fill
            priority
            sizes="(max-width: 1024px) 240px, 240px"
            alt={`Banner`}
            className="object-cover transition-transform duration-300 hover:scale-105 rounded-xl"
          />
        </div>
      ) : (
        // Large type: hiển thị tất cả banners
        <div
          className={`relative overflow-hidden rounded-lg ${className || ""}`}
        >
          <div className="w-full aspect-video lg:aspect-auto lg:min-h-60 relative">
            {images.map((image, idx) => {
              const active = idx === index;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    active
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={image}
                    fill
                    loading={active ? "eager" : "lazy"}
                    priority={active && idx === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                    alt={`Banner ${idx + 1}`}
                    className="object-cover transition-transform duration-300 hover:scale-105 rounded-xl"
                  />
                </div>
              );
            })}
          </div>

          {/* arrows */}
          {showArrows && length > 1 && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-6 h-6 rounded-full transition-all ${
                    i === index
                      ? "bg-neutral-100 w-20"
                      : "bg-neutral-400 hover:bg-neutral-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
