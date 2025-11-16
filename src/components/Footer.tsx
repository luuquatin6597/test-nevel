import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "Company Details", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Affiliate", href: "#" },
    ],
    policy: [
      { name: "F.A.Q (Frequently Asked Questions)", href: "#" },
      { name: "AML/KYC Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Dispute Resolution", href: "#" },
    ],
    product: [
      { name: "Product", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Price", href: "#" },
      { name: "Sales", href: "#" },
    ],
  };

  const paymentMethods = [
    { title: "Visa", icon: getAssetPath("/payments/visa.svg") },
    { title: "Mastercard", icon: getAssetPath("/payments/mastercard.svg") },
    { title: "AstroPay", icon: getAssetPath("/payments/astro-pay.svg") },
    { title: "Interac", icon: getAssetPath("/payments/interac.svg") },
    { title: "JetonBank", icon: getAssetPath("/payments/jetonbank.svg") },
  ];

  return (
    <footer className="py-40">
      <div className="container">
        {/* Links Section */}
        <div className="grid grid-cols-12 gap-24 mb-20 lg:mb-40">
          {/* Column 1 */}
          <div className="col-span-6 lg:col-span-3">
            <h3 className="text-14 lg:text-16 leading-28 black-italic text-neutral-subdued uppercase mb-12">
              About us
            </h3>
            <ul className="space-y-8">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-12 lg:text-14 leading-16 lg:leading-20 text-neutral-accent hover:text-primary-normal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-span-6 lg:col-span-3">
            <h3 className="text-14 lg:text-16 leading-28 black-italic text-neutral-subdued uppercase mb-12">
              Help
            </h3>
            <ul className="space-y-8">
              {footerLinks.policy.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-12 lg:text-14 leading-16 lg:leading-20 text-neutral-accent hover:text-primary-normal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-6 lg:col-span-3">
            <h3 className="text-14 lg:text-16 leading-28 black-italic text-neutral-subdued uppercase mb-12">
              Our Products
            </h3>
            <ul className="space-y-8">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-12 lg:text-14 leading-16 lg:leading-20 text-neutral-accent hover:text-primary-normal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact us */}
          <div className="col-span-6 lg:col-span-3">
            <h3 className="text-14 lg:text-16 leading-28 black-italic text-neutral-subdued uppercase mb-12">
              Contact us
            </h3>
            <div className="space-y-8">
              <a
                href="mailto:support@xiaomi.email"
                className="block text-12 lg:text-14 leading-16 lg:leading-20 text-neutral-accent hover:text-primary-normal transition-colors"
              >
                support@xiaomi.email
              </a>
              <a
                href="mailto:affiliate@xiaomi.com"
                className="block text-12 lg:text-14 leading-16 lg:leading-20 text-neutral-accent hover:text-primary-normal transition-colors"
              >
                affiliate@xiaomi.com
              </a>
              <button className="mt-24">
                <Image
                  src={getAssetPath("/images/install-app.png")}
                  alt="Phone"
                  width={151.4}
                  height={44}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Warranty Section */}
        <div className="flex items-center flex-col lg:flex-row gap-12 lg:gap-20 mb-20 lg:mb-40">
          <Image
            src={getAssetPath("/images/footer-secure.png")}
            alt="Secure"
            width={131}
            height={30}
          />
          <p className="text-12 lg:text-14 leading-16 lg:leading-20 text-neutral-accent text-center lg:text-left">
            For designated models of Xiaomi smartphone, you can enjoy the
            warranty services for your device at designated Xiaomi.
          </p>
        </div>

        {/* Warranty Details */}
        <p className="text-12 lg:text-14 leading-16 lg:leading-20 text-neutral-accent mb-20 lg:mb-40 text-center lg:text-left">
          Customers should provide a valid purchase proof and warranty card.
          After inspected by the Xiaomi authorized service center and confirmed
          that the smartphone meets the warranty conditions, you can enjoy the
          in-warranty service for free*.Warranty determination rules are
          subjected to the local service center.
        </p>

        {/* Copyright */}
        <div className="bg-bg-neutral-normal rounded-xl py-16 px-24 mb-20 lg:mb-40">
          <p className="text-12 lg:text-14 leading-16 lg:leading-20 text-neutral-accent text-center">
            © Copyright 2025. All Rights Reserved
          </p>
        </div>

        {/* Payment Methods */}
        <div className="flex items-center justify-center gap-20 lg:gap-24 flex-wrap">
          {paymentMethods.map((payment, index) => (
            <div key={index} className="relative">
              <Image
                src={payment.icon}
                alt={payment.title}
                height={24}
                width={150}
                className="h-[24px] w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
