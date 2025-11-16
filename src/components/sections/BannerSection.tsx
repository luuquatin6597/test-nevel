import Title from "../ui/Title";
import Image from "next/image";

interface BannerSectionProps {
  images: string[];
  type?: "large" | "small";
  title: string;
  showArrows?: boolean;
  className?: string;
}

export function BannerSection({
  images,
  type = "large",
  title,
  showArrows = false,
  className,
}: BannerSectionProps) {
  return (
    <section
      className={`flex flex-col ${
        type === "small" ? "lg:w-60 lg:shrink-0" : "w-full"
      } ${className || ""}`}
    >
      <Title text={title} showArrows={showArrows} />
      {type === "small" ? (
        // Small type: chỉ hiển thị banner đầu tiên
        <div className="overflow-hidden rounded-lg flex-1 relative min-h-60">
          <Image
            src={images[0]}
            fill
            alt={`Banner`}
            className="object-cover transition-transform duration-300 hover:scale-105 rounded-xl"
          />
        </div>
      ) : (
        // Large type: hiển thị tất cả banners
        images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg flex-1 relative min-h-60"
          >
            <Image
              src={image}
              fill
              alt={`Banner ${index + 1}`}
              className="object-cover transition-transform duration-300 hover:scale-105 rounded-xl"
            />
          </div>
        ))
      )}
    </section>
  );
}
