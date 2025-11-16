import { BannerSection } from "@/components/sections/BannerSection";
import Slider from "@/components/sections/Slider";
import TopProducts from "@/components/sections/TopProducts";
import TopSelling from "@/components/sections/TopSelling";
import { Product } from "@/types/product";

const sliderSlides = [
  {
    title: "XIAOMI TV max Series",
    subtitle: "View to the max",
    image: "/images/slider-banner.png",
    imageMb: "/images/slider-banner-mobile.png",
  },
  {
    title: "XIAOMI TV max Series 22222",
    subtitle: "View to the max",
    image: "/images/slider-banner.png",
    imageMb: "/images/slider-banner-mobile.png",
  },
];

const TopSellingProducts: Product[] = [
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

const topProducts = [
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
  {
    id: 7,
    image: "/images/top-products-7.png",
  },
];

export default function Home() {
  return (
    <>
      {/* Section Slider */}
      <Slider slides={sliderSlides} />

      {/* Section Top Selling */}
      <div className="container">
        <TopSelling
          products={TopSellingProducts}
          title="TOP BEST-SELLING PRODUCTS"
          tableHead={["NO.", "PRODUCTS", "QUANTITY", "PRICE"]}
          colSpans={[2, 4, 3, 3]}
        />
      </div>

      {/* Section Top Products */}
      <TopProducts products={topProducts} title="TOP PRODUCTS" />

      <div className="container">
        <div className="flex flex-col lg:flex-row py-40 lg:py-80 gap-24 items-stretch">
          <BannerSection
            title="Black Friday"
            images={["/images/black-friday.png"]}
            showArrows={true}
            type="large"
          />
          <div className="flex gap-16 lg:gap-24 flex-1 items-stretch">
            <BannerSection
              title="NEW PRODUCTS"
              images={["/images/new-products.png"]}
              type="small"
              className="flex-1"
            />
            <BannerSection
              title="Sales"
              images={["/images/sales.png"]}
              type="small"
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
