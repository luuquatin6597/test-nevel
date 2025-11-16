"use client";

import TableHead from "@/components/ui/TableHead";
import TableColumn from "@/components/ui/TableColumn";
import Title from "../ui/Title";
import { Product } from "@/types/product";

interface TopSellingProps {
  products?: Product[];
}

// Default products data
const defaultProducts: Product[] = [
  {
    id: 1,
    name: "XIAOMI MAX 24",
    quantity: 1424042,
    price: 7090099,
  },
  {
    id: 2,
    name: "XIAOMI MAX 24",
    quantity: 1424042,
    price: 7090099,
  },
  {
    id: 3,
    name: "XIAOMI MAX 24",
    quantity: 1424042,
    price: 7090099,
  },
  {
    id: 4,
    name: "XIAOMI MAX 24",
    quantity: 1424042,
    price: 7090099,
  },
  {
    id: 5,
    name: "XIAOMI MAX 24",
    quantity: 1424042,
    price: 7090099,
  },
  {
    id: 6,
    name: "XIAOMI MAX 24",
    quantity: 1424042,
    price: 7090099,
  },
  {
    id: 7,
    name: "XIAOMI MAX 24",
    quantity: 1424042,
    price: 7090099,
  },
];

export default function TopSelling({ products }: TopSellingProps) {
  const displayProducts = products || defaultProducts;

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
      <Title text="TOP BEST-SELLING PRODUCTS" type="highlight" align="center" />

      {/* Header */}
      <TableHead
        columns={["NO.", "PRODUCTS", "QUANTITY", "PRICE"]}
        colSpans={[2, 4, 3, 3]}
      />

      {/* Product List - Scrollable container */}
      <div className="flex flex-col gap-1 lg:gap-3.5 max-h-[296px] lg:max-h-[436px] overflow-y-auto scrollbar-custom">
        {displayProducts.map((product, index) => (
          <TableColumn
            key={product.id}
            index={index}
            product={product}
            getItemBackground={getItemBackground}
          />
        ))}
      </div>
    </section>
  );
}
