"use client";

import IconLeft from "../icons/IconLeft";
import IconRight from "../icons/IconRight";

interface TitleProps {
  text: string;
  type?: "normal" | "highlight";
  align?: "left" | "center" | "right";
  mb?: boolean;
  showArrows?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
}

export default function Title({
  text,
  type = "normal",
  align = "left",
  mb = true,
  showArrows = false,
  onPrevious,
  onNext,
}: TitleProps) {
  const handlePrevious = () => {
    if (onPrevious) {
      onPrevious();
    } else {
      console.log("Go to previous slide");
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      console.log("Go to next slide");
    }
  };

  return (
    <div
      className={`${
        showArrows ? "flex items-center justify-between w-full" : ""
      } ${mb ? "mb-8" : ""}`}
    >
      <div
        className={`${
          type == "highlight"
            ? "bg-linear-to-r from-[#FFC700]/0 via-[#FFC700]/10 to-[#FFC700]/0"
            : ""
        } text-${align}`}
      >
        <h2 className="text-primary-normal text-18 leading-32 lg:text-24 lg:leading-48 black-italic uppercase">
          {text}
        </h2>
      </div>

      {showArrows && (
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={handlePrevious}
            className="flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 bg-bg-neutral-subdued hover:bg-bg-neutral-normal rounded-lg lg:rounded-xl shadow-md transition-colors"
            aria-label="Previous Slide"
          >
            <IconLeft />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 bg-bg-neutral-subdued hover:bg-bg-neutral-normal rounded-lg lg:rounded-xl shadow-md transition-colors"
            aria-label="Next Slide"
          >
            <IconRight />
          </button>
        </div>
      )}
    </div>
  );
}
