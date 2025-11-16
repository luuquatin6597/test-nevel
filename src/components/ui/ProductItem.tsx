import Image from "next/image";
import { Product } from "@/types/product";
import { getAssetPath } from "@/lib/utils";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="shrink-0">
      <div className="overflow-hidden rounded-xl cursor-pointer">
        {/* Product Image */}
        <Image
          src={getAssetPath(product.image ?? "/images/placeholder.png")}
          alt={`Product`}
          width={180}
          height={245}
          className="object-cover max-w-[103px] lg:max-w-[180px] max-h-[140px] lg:max-h-[245px]"
        />
      </div>
    </div>
  );
}
