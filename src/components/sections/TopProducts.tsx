"use client";

import { useRef, useCallback } from "react";
import Title from "../ui/Title";
import { Product } from "@/types/product";
import ProductItem from "../ui/ProductItem";

interface TopProductsProps {
  products?: Product[];
  title?: string;
}

export default function TopProducts({ products, title }: TopProductsProps) {
  const listRef = useRef<HTMLDivElement | null>(null);

  const scrollByPage = useCallback((direction: "next" | "prev") => {
    const el = listRef.current;
    if (!el) return;
    const distance = el.clientWidth; // page-like scroll
    const left = direction === "next" ? distance : -distance;
    el.scrollBy({ left, behavior: "smooth" });
  }, []);

  const handlePrev = () => scrollByPage("prev");
  const handleNext = () => scrollByPage("next");

  return (
    <section>
      <div className="container">
        {/* Title */}
        {title && (
          <Title
            text={title}
            showArrows={true}
            onPrevious={handlePrev}
            onNext={handleNext}
          />
        )}
      </div>

      {/* Products List */}
      <div className="container pr-0 lg:pr-20">
        <div
          ref={listRef}
          className="flex flex-row overflow-x-auto gap-[8px] lg:gap-[16px] scrollbar-custom pr-20 lg:pr-0"
        >
          {products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
