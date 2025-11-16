"use client";

import TableHead from "@/components/ui/TableHead";
import TableColumn from "@/components/ui/TableColumn";
import Title from "../ui/Title";
import { Product } from "@/types/product";

interface TopSellingProps {
  products: Product[];
  title?: string;
  tableHead: string[];
  colSpans: number[];
}

export default function TopSelling({
  products,
  title,
  tableHead,
  colSpans,
}: TopSellingProps) {
  // Background gradients for top 3 items
  const getItemBackground = (index: number) => {
    const gradients = [
      "bg-linear-to-r from-[#FFC83D]/20 to-[#000000]/0", // Item 1: Gold with 20% opacity
      "bg-linear-to-r from-[#CACACA]/20 to-[#000000]/0", // Item 2: Silver with 20% opacity
      "bg-linear-to-r from-[#99735A]/20 to-[#000000]/0", // Item 3: Bronze with 20% opacity
    ];

    return index < 3 && gradients[index];
  };

  return (
    <section className="py-40 lg:py-80">
      {/* Title */}
      {title && <Title text={title} type="highlight" align="center" />}

      {/* Header */}
      <TableHead columns={tableHead} colSpans={colSpans} />

      {/* Product List - Scrollable container */}
      <div className="flex flex-col gap-1 lg:gap-3.5 max-h-[296px] lg:max-h-[436px] overflow-y-auto scrollbar-custom">
        {products.map((product, index) => (
          <TableColumn
            key={product.id}
            index={index}
            product={product}
            getItemBackground={getItemBackground}
            colSpans={colSpans}
          />
        ))}
      </div>
    </section>
  );
}
