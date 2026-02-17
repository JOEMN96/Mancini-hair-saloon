export interface BusinessInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  fullAddress: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  website: string;
  bookingUrl: string;
  mapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isClosed: boolean;
}

export interface HoursConfig {
  hours: BusinessHours[];
  note: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  source: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonicalUrl: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaText: string;
}

export interface AboutContent {
  title: string;
  story: string;
  values: string[];
}

export const businessInfo: BusinessInfo = {
  name: "Mancini's Hair Salon",
  shortName: "Mancini's",
  tagline: "EXCEPTIONAL. STUNNING. CONFIDENT.",
  description:
    "Mancini's Hair Salon is more than just a place for hairstyling—it's a space where creativity, passion, and expertise come together. We are dedicated to providing exceptional service in a warm and welcoming environment.",
  address: "300 Eagleson Rd",
  city: "Kanata",
  province: "ON",
  postalCode: "K2M 1C9",
  fullAddress: "300 Eagleson Rd, Kanata, ON K2M 1C9",
  phone: "6135923601",
  phoneFormatted: "(613) 592-3601",
  email: "",
  website: "https://www.mancinishairsalon.com",
  bookingUrl: "https://www.mancinishairsalon.com/book-online",
  mapUrl: "https://maps.app.goo.gl/Ne3DgWypFykVnNqAA",
  coordinates: {
    lat: 45.3521,
    lng: -75.9063,
  },
};

export const hoursConfig: HoursConfig = {
  note: "Note that prices shown exclude taxes",
  hours: [
    { day: "Monday", open: "", close: "", isClosed: true },
    { day: "Tuesday", open: "9:00", close: "17:00", isClosed: false },
    { day: "Wednesday", open: "9:00", close: "17:00", isClosed: false },
    { day: "Thursday", open: "9:00", close: "17:00", isClosed: false },
    { day: "Friday", open: "9:00", close: "17:00", isClosed: false },
    { day: "Saturday", open: "9:00", close: "15:00", isClosed: false },
    { day: "Sunday", open: "", close: "", isClosed: true },
  ],
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    quote:
      "The best salon in Kanata! The team always makes me feel so welcome and my hair has never looked better.",
    rating: 5,
    source: "Google Reviews",
  },
  {
    id: "2",
    name: "James K.",
    quote:
      "Great men's cuts and friendly staff. I've been coming here for years and wouldn't go anywhere else.",
    rating: 5,
    source: "Google Reviews",
  },
  {
    id: "3",
    name: "Emily R.",
    quote:
      "Love the atmosphere and the stylists are true professionals. My color turned out exactly how I wanted.",
    rating: 5,
    source: "Google Reviews",
  },
];

export const heroContent: HeroContent = {
  headline: "EXCEPTIONAL. STUNNING. CONFIDENT.",
  subheadline:
    "Mancini's Hair Salon is more than just a place for hairstyling—it's a space where creativity, passion, and expertise come together. From everyday cuts to bold transformations, our team is committed to making every client feel confident and beautiful.",
  ctaText: "BOOK AN APPOINTMENT",
};

export const aboutContent: AboutContent = {
  title: "ABOUT MANCINI'S HAIR SALON",
  story:
    "Mancini's Hair Salon is more than just a place for hairstyling—it's a space where creativity, passion, and expertise come together. We are dedicated to providing exceptional service in a warm and welcoming environment. From everyday cuts to bold transformations, our team is committed to making every client feel confident and beautiful. Your journey to stunning hair starts here!",
  values: [
    "Exceptional customer service",
    "Warm and welcoming atmosphere",
    "Professional expertise",
    "Creative passion for hairstyling",
  ],
};

export const seoDefaults: SEOConfig = {
  title: "Mancini's Hair Salon | Kanata's Premier Hair Styling",
  description:
    "Mancini's Hair Salon in Kanata - Where creativity, passion, and expertise come together. Book your appointment for exceptional haircuts, coloring, and styling services.",
  keywords: [
    "hair salon",
    "haircut",
    "hair coloring",
    "highlights",
    "kanata",
    "ottawa",
    "hair styling",
  ],
  ogImage: "/og-image.jpg",
  canonicalUrl: "https://www.mancinishairsalon.com",
};
