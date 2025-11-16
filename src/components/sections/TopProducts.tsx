import Title from "../ui/Title";
import { Product } from "@/types/product";
import ProductItem from "../ui/ProductItem";

interface TopProductsProps {
  products?: Product[];
}

const defaultProducts = [
  {
    id: 1,
    image: "/images/top-products-1.png",
  },
  {
    id: 2,
    image: "/images/top-products-2.png",
  },
  {
    id: 3,
    image: "/images/top-products-3.png",
  },
  {
    id: 4,
    image: "/images/top-products-4.png",
  },
  {
    id: 5,
    image: "/images/top-products-5.png",
  },
  {
    id: 6,
    image: "/images/top-products-6.png",
  },
];

export default function TopProducts({ products }: TopProductsProps) {
  const displayProducts = products || defaultProducts;
  return (
    <section>
      <div className="container">
        {/* Title */}
        <Title text="TOP PRODUCTS" showArrows={true} />
      </div>

      {/* Products List */}
      <div className="container pr-0 lg:pr-20">
        <div className="flex flex-row overflow-x-auto gap-[8px] lg:gap-[16px] scrollbar-custom pr-20 lg:pr-0">
          {displayProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
