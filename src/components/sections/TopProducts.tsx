import Title from "../ui/Title";
import { Product } from "@/types/product";
import ProductItem from "../ui/ProductItem";

interface TopProductsProps {
  products?: Product[];
  title?: string;
}

export default function TopProducts({ products, title }: TopProductsProps) {
  return (
    <section>
      <div className="container">
        {/* Title */}
        {title && <Title text={title} showArrows={true} />}
      </div>

      {/* Products List */}
      <div className="container pr-0 lg:pr-20">
        <div className="flex flex-row overflow-x-auto gap-[8px] lg:gap-[16px] scrollbar-custom pr-20 lg:pr-0">
          {products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
