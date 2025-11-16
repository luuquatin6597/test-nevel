import Image from "next/image";
import { formatNumber, formatCurrency } from "@/utils/format";
import { Product } from "@/types/product";

interface TableColumnProps {
  index: number;
  product: Product;
  getItemBackground?: (index: number) => string | boolean;
}

export default function TableColumn({
  index,
  product,
  getItemBackground,
}: TableColumnProps) {
  return (
    <div className="grid grid-cols-12 cursor-pointer items-center rounded-xl lg:rounded-2xl bg-bg-neutral-normal hover:bg-bg-neutral-subdued transition-all overflow-hidden shrink-0">
      {/* Number/Icon */}
      <div className="relative h-full content-center col-span-2 px-12 py-12 lg:px-24 lg:py-16">
        {/* Gradient Background - Only for top 3 items */}
        {index < 3 && getItemBackground && (
          <div
            className={`absolute h-full left-0 top-0 bottom-0 w-full ${getItemBackground(
              index
            )}`}
          />
        )}
        <div className="w-20 h-20 lg:w-40 lg:h-40 flex items-center justify-center">
          {index < 3 ? (
            <Image
              src={`/images/top-selling-${index + 1}.png`}
              alt={product.name ?? "Product"}
              width={40}
              height={40}
            />
          ) : (
            <span className="text-20 lg:text-32 leading-48 black-italic text-primary-subdued">
              {index + 1}
            </span>
          )}
        </div>
      </div>

      {/* Product Name */}
      <div className="col-span-4 pl-0 pr-12 py-12 lg:px-24 lg:py-16">
        <h4 className="text-10 lg:text-16 leading-24 black-italic text-neutral-normal uppercase truncate">
          {product.name}
        </h4>
      </div>

      {/* Quantity */}
      <div className="col-span-3 pl-0 pr-12 py-12 lg:px-24 lg:py-16">
        <p className="text-10 lg:text-16 leading-24 black-italic text-neutral-normal">
          {formatNumber(product.quantity ?? 0)}
        </p>
      </div>

      {/* Price */}
      <div className="col-span-3 pl-0 pr-12 py-12 lg:px-24 lg:py-16 justify-self-end">
        <span className="inline-block text-center w-auto px-8 py-4 lg:px-16 lg:py-10 rounded-lg lg:rounded-2xl bg-bg-neutral-accent text-10 lg:text-16 leading-24 black-italic text-primary-normal">
          {formatCurrency(product.price ?? 0)}
        </span>
      </div>
    </div>
  );
}
