"use client";

import { useEffect } from "react";
import Image from "next/image";
import Button from "./Button";
import { IconClose } from "../icons/IconClose";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  image: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  image,
  buttonText = "SEE MORE",
  onButtonClick,
}: ModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-20"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg-modal-backdrop backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative bg-bg-neutral-normal rounded-2xl max-w-[350px] w-full animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-1 top-12 right-12 lg:top-12 lg:right-12 w-32 h-32 flex items-center justify-center rounded-full bg-bg-neutral-normal hover:bg-bg-neutral-accent transition-colors"
          aria-label="Close"
        >
          <IconClose className="w-16 h-16 text-neutral-200" />
        </button>

        <div className="absolute w-full z-1 left-1/2 -translate-x-1/2 top-40 lg:top-40">
          {/* Title */}
          <h1 className="text-24 lg:text-24 font-bold text-center mb-[7px] tracking-wider animate-fade-in bg-linear-to-r from-[#FFFFFF] via-[#FFD3E3] to-[#FFEA9F] bg-clip-text text-transparent">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-16 leading-24 lg:text-16 text-neutral-accent text-center animate-fade-in-delay">
            {subtitle}
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={350}
            height={404}
            className="object-cover"
            priority
          />
        </div>

        {/* Button */}
        <div className="flex justify-center absolute -translate-1/2 left-1/2 w-full">
          <Button size="large" onClick={onButtonClick || onClose}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
