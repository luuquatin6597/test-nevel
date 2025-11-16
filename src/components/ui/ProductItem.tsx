import Image from "next/image";
import type { Product } from "@/types/product";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="shrink-0">
      <div className="overflow-hidden rounded-xl cursor-pointer">
        {/* Product Image */}
        <Image
          src={product.image ?? "/images/placeholder.png"}
          alt={product.name || "Product"}
          width={180}
          height={245}
          loading="lazy"
          sizes="(max-width: 1024px) 103px, 180px"
          className="object-cover max-w-[103px] lg:max-w-[180px] max-h-[140px] lg:max-h-[245px]"
        />
      </div>
    </div>
  );
}
