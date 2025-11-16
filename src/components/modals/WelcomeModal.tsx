"use client";

import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import { getAssetPath } from "@/lib/utils";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="XIAOMI TV Max Series"
      subtitle="View to the max"
      image={getAssetPath("/images/welcome-banner.png")}
      buttonText="SEE MORE"
      onButtonClick={() => {
        setIsOpen(false);
      }}
    />
  );
}
