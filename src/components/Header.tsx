"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Button from "./ui/Button";
import { IconDown } from "./icons/IconDown";

const menuItems = [
  { href: "/", label: "HOME" },
  { href: "#", label: "PRODUCT" },
  { href: "#", label: "CONTACT" },
  { href: "#", label: "PRICE" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full container">
      <div className="py-20 flex items-center justify-between">
        <div className="flex gap-16 lg:gap-40 items-center">
          {/* Burger Button - Mobile only */}
          <button
            className="lg:hidden flex flex-col gap-[5px]"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <span
              className={`w-24 h-[3px] rounded-xl bg-bg-neutral-invert-accent transition-all ${
                isMenuOpen ? "rotate-45 translate-x-0 translate-y-[7px]" : ""
              }`}
            ></span>
            <span
              className={`w-24 h-[3px] rounded-xl bg-bg-neutral-invert-accent transition-all ${
                isMenuOpen ? "-rotate-45 translate-x-0 -translate-y-px" : ""
              }`}
            ></span>
            <span
              className={`w-16 h-[3px] rounded-xl bg-bg-neutral-invert-accent transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-12">
            <Image
              className="lg:hidden"
              src="/logo/logo.svg"
              alt="Logo"
              width={38}
              height={40}
            />
            <Image
              className="hidden lg:flex"
              src="/logo/logo-text.svg"
              alt="Logo"
              width={138}
              height={40}
            />
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                title={item.label}
                className={`px-20 py-10 text-14 leading-20 rounded-full transition-colors ${
                  pathname === item.href &&
                  "bg-bg-neutral-subdued text-primary-normal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Auth Buttons */}
        <div className="flex items-center gap-8">
          <Button size="large" type="button">
            SIGN UP
          </Button>
          <Button variant="secondary" size="large" type="button">
            LOG IN
          </Button>
          {/* Language selector - Hidden on mobile */}
          <div className="hidden lg:flex items-center multiple-languages uppercase text-medium gap-2">
            <span>eng</span>
            <IconDown className="w-[19px] height-[19px]" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[80px] bg-background z-50 transition-transform duration-300 overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center p-20 gap-16">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              title={item.label}
              onClick={toggleMenu}
              className={`w-full px-20 py-14 text-14 leading-20 text-center rounded-full transition-colors ${
                pathname === item.href
                  ? "bg-bg-neutral-subdued text-primary-normal"
                  : "text-neutral-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
