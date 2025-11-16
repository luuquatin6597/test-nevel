import { BannerSection } from "@/components/sections/BannerSection";
import Slider from "@/components/sections/Slider";
import TopProducts from "@/components/sections/TopProducts";
import TopSelling from "@/components/sections/TopSelling";

export default function Home() {
  return (
    <>
      {/* Section Slider */}
      <Slider
        slides={[
          {
            title: "XIAOMI TV max Series",
            subtitle: "View to the max",
            image: "/images/slider-banner.png",
            imageMb: "/images/slider-banner-mobile.png",
          },
        ]}
      />
      <div className="container">
        {/* Section Top Selling */}
        <TopSelling />
      </div>

      {/* Section Top Products */}
      <TopProducts />

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
