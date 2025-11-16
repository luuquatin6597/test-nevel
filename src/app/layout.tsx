import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WelcomeModal from "@/components/modals/WelcomeModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  /* Load a sensible range of weights and both normal/italic styles so
     regular text doesn't render as bold+italic (only 900 italic was loaded).
     You can reduce the list to the weights you actually need for smaller
     payloads (e.g. ["400","600","900"]). */
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "XIAOMI",
  description: "XIAOMI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="animate-fade-in flex min-h-screen flex-col bg-background font-sans">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Welcome Modal */}
        <WelcomeModal />
      </body>
    </html>
  );
}
