import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { galleryImages, type GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { PageTitle } from "@/components/ui/page-title";

type FilterType = "all" | GalleryImage["category"];

const filters: { value: FilterType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "cut", label: "Cuts" },
  { value: "color", label: "Color" },
  { value: "style", label: "Styles" },
  { value: "interior", label: "Salon" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <PageContainer>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <PageTitle className="mb-4">Our Gallery</PageTitle>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Take a look at some of our work. From precision cuts to stunning color
            transformations, see the Mancini's difference.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className={cn("capitalize")}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No images found for this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageContainer>
  );
}
