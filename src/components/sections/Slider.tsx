"use client";

import React, { useState } from "react";
import Image from "next/image";
import IconLeft from "../icons/IconLeft";
import IconRight from "../icons/IconRight";

interface SlideItem {
  id?: number;
  title: string;
  subtitle: string;
  image: string;
  imageMb?: string;
}

interface SliderProps {
  slides: SlideItem[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Slider({
  slides,
  autoPlay = false,
  interval = 5000,
}: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto play functionality
  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) return null;

  const currentItem = slides[currentSlide];

  if (!currentItem) return null;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Content */}
      <div className="relative">
        <div className="absolute w-100 px-24 z-1 left-1/2 -translate-x-1/2 top-[22px] lg:top-11">
          {/* Title */}
          <h1
            key={`title-${currentSlide}`}
            className="text-24 lg:text-[48px] font-bold text-center mb-[7px] uppercase tracking-wider animate-fade-in bg-linear-to-r from-[#FFFFFF] via-[#FFD3E3] to-[#FFEA9F] bg-clip-text text-transparent"
          >
            {currentItem.title}
          </h1>

          {/* Subtitle */}
          <p
            key={`subtitle-${currentSlide}`}
            className="text-16 leading-24 lg:text-h2 lg:leading-h2 text-neutral-accent text-center animate-fade-in-delay"
          >
            {currentItem.subtitle}
          </p>
        </div>

        {/* Images Grid */}
        <div className="flex w-full relative">
          <Image
            key={`image-${currentSlide}`}
            src={currentItem.image}
            alt={`${currentItem.title}`}
            width={1600}
            height={642}
            className="w-full h-auto object-cover animate-fade-in-image hidden lg:block"
            loading={currentSlide === currentSlide ? "eager" : "lazy"}
            priority={currentSlide === 0}
          />
          {currentItem.imageMb && (
            <Image
              key={`image-mb-${currentSlide}`}
              src={currentItem.imageMb}
              alt={`${currentItem.title} Mobile`}
              width={600}
              height={642}
              className="w-full h-auto object-cover animate-fade-in-image lg:hidden"
              loading={currentSlide === currentSlide ? "eager" : "lazy"}
              priority={currentSlide === 0}
            />
          )}
        </div>
      </div>

      {/* Navigation arrows + dots */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-16 top-1/2 -translate-y-1/2 z-2 w-32 h-32 rounded-full bg-neutral-800/50 hover:bg-neutral-700/70 flex items-center justify-center transition-all backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <IconLeft className="w-24 h-24 text-neutral-0" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-16 top-1/2 -translate-y-1/2 z-2 w-32 h-32 rounded-full bg-neutral-800/50 hover:bg-neutral-700/70 flex items-center justify-center transition-all backdrop-blur-sm"
            aria-label="Next slide"
          >
            <IconRight className="w-24 h-24 text-neutral-0 rotate-180" />
          </button>

          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-1">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-10 h-10 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-neutral-100 w-32"
                    : "bg-neutral-600 hover:bg-neutral-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
