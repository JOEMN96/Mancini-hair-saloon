export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "cut" | "color" | "style" | "interior";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    alt: "Elegant woman with beautiful blonde highlights",
    category: "color",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    alt: "Professional hair styling in salon",
    category: "cut",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
    alt: "Modern haircut with styling",
    category: "cut",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    alt: "Hair coloring process at salon",
    category: "color",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    alt: "Beautiful salon interior",
    category: "interior",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80",
    alt: "Professional hair blow dry styling",
    category: "style",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80",
    alt: "Trendy hairstyle with volume",
    category: "style",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=800&q=80",
    alt: "Salon workspace with professional tools",
    category: "interior",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
    alt: "Hair highlight transformation",
    category: "color",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1551611591-4f7d0d2c3e76?w=800&q=80",
    alt: "Women's short stylish haircut",
    category: "cut",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    alt: "Hair styling with curling iron",
    category: "style",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
    alt: "Modern salon reception area",
    category: "interior",
  },
];

export const getImagesByCategory = (
  category: GalleryImage["category"]
): GalleryImage[] => {
  return galleryImages.filter((img) => img.category === category);
};
