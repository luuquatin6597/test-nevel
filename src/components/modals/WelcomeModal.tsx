"use client";

import { useState, useEffect } from "react";
import Modal from "../ui/Modal";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="XIAOMI TV Max Series"
      subtitle="View to the max"
      image="/images/welcome-banner.png"
      buttonText="SEE MORE"
      onButtonClick={() => {
        setIsOpen(false);
        // Add your navigation logic here
        console.log("Navigate to product page");
      }}
    />
  );
}
