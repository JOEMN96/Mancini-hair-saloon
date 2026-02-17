export interface Service {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description?: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "ladies-regular",
    name: "Ladies' Regular Services",
    description: "Classic cuts and styles for everyday elegance",
    services: [
      {
        id: "ladies-haircut",
        name: "Ladies' Haircut",
        price: 42.48,
        category: "ladies-regular",
      },
      {
        id: "ladies-wash-cut",
        name: "Ladies' Wash & Cut",
        price: 45,
        category: "ladies-regular",
      },
      {
        id: "ladies-wash-blow-dry",
        name: "Ladies' Wash & Blow Dry",
        price: 45,
        category: "ladies-regular",
      },
      {
        id: "ladies-wash-blow-dry-straightening",
        name: "Ladies' Wash, Blow Dry & Straightening",
        description: "With Flat Iron",
        price: 50,
        category: "ladies-regular",
      },
      {
        id: "ladies-cut-blow-dry-short",
        name: "Ladies' Cut & Blow Dry (Short)",
        price: 55,
        category: "ladies-regular",
      },
      {
        id: "ladies-cut-blow-dry-medium",
        name: "Ladies' Cut & Blow Dry (Medium)",
        price: 65,
        category: "ladies-regular",
      },
      {
        id: "ladies-cut-blow-dry-long",
        name: "Ladies' Cut & Blow Dry (Long)",
        price: 70,
        category: "ladies-regular",
      },
      {
        id: "ladies-bang-trim",
        name: "Ladies' Bang Trim",
        price: 10,
        category: "ladies-regular",
      },
    ],
  },
  {
    id: "ladies-specialty",
    name: "Ladies' Specialty Services",
    description: "Professional coloring and highlighting services",
    services: [
      {
        id: "ladies-colour-blow-dry",
        name: "Ladies' Colour & Blow Dry",
        price: 130,
        category: "ladies-specialty",
      },
      {
        id: "ladies-colour-cut-blow-dry",
        name: "Ladies' Colour, Cut & Blow Dry",
        price: 150,
        category: "ladies-specialty",
      },
      {
        id: "ladies-perms-wash-blow-dry",
        name: "Ladies' Perms with Wash & Blow Dry",
        price: 140,
        category: "ladies-specialty",
      },
      {
        id: "fancy-updos",
        name: "Fancy Up-do's",
        description: "Ex: Prom / Bridal",
        price: 100,
        category: "ladies-specialty",
      },
      {
        id: "cap-highlights-full",
        name: "Cap Highlights (Full Head)",
        description: "With Toner",
        price: 140,
        category: "ladies-specialty",
      },
      {
        id: "cap-highlights-half",
        name: "Cap Highlights (Half Head)",
        description: "With Toner",
        price: 120,
        category: "ladies-specialty",
      },
      {
        id: "foil-highlights-full",
        name: "Foil Highlights (Full Head)",
        description: "With Toner",
        price: 175,
        category: "ladies-specialty",
      },
      {
        id: "foil-highlights-half",
        name: "Foil Highlights (Half Head)",
        description: "With Toner",
        price: 140,
        category: "ladies-specialty",
      },
      {
        id: "single-foil-highlight",
        name: "Single Foil Highlight",
        description: "With Toner",
        price: 20,
        category: "ladies-specialty",
      },
    ],
  },
  {
    id: "ladies-senior",
    name: "Ladies' Senior Rates (65+)",
    description: "Special pricing for our senior clients",
    services: [
      {
        id: "ladies-senior-haircut",
        name: "Haircut",
        price: 38,
        category: "ladies-senior",
      },
      {
        id: "ladies-senior-wash-cut",
        name: "Wash and Cut",
        price: 40,
        category: "ladies-senior",
      },
      {
        id: "ladies-senior-wash-cut-blow-dry",
        name: "Wash, Cut, & Blow Dry / Set",
        price: 55,
        category: "ladies-senior",
      },
      {
        id: "ladies-senior-colour-blow-dry",
        name: "Colour & Blow Dry",
        price: 110,
        category: "ladies-senior",
      },
      {
        id: "ladies-senior-colour-cut-blow-dry",
        name: "Colour, Cut & Blow Dry",
        price: 130,
        category: "ladies-senior",
      },
      {
        id: "ladies-senior-cap-highlights-full",
        name: "Cap Highlights (Full Head)",
        price: 130,
        category: "ladies-senior",
      },
      {
        id: "ladies-senior-cap-highlights-half",
        name: "Cap Highlights (Half Head)",
        price: 110,
        category: "ladies-senior",
      },
      {
        id: "ladies-senior-foil-highlights-full",
        name: "Foil Highlights (Full Head)",
        price: 140,
        category: "ladies-senior",
      },
      {
        id: "ladies-senior-foil-highlights-half",
        name: "Foil Highlights (Half Head)",
        price: 120,
        category: "ladies-senior",
      },
      {
        id: "ladies-senior-perms",
        name: "Perms with Wash & Blow Dry",
        description: "With Toner",
        price: 130,
        category: "ladies-senior",
      },
    ],
  },
  {
    id: "mens-regular",
    name: "Men's Regular Services",
    description: "Professional cuts and styling for men",
    services: [
      {
        id: "mens-haircut",
        name: "Men's Haircut",
        price: 28.32,
        category: "mens-regular",
      },
      {
        id: "mens-long-haircut",
        name: "Men's Long Haircut",
        price: 30.09,
        category: "mens-regular",
      },
      {
        id: "mens-design-cut-style",
        name: "Men's Design Cut & Style",
        description: "Flat-top & Faux-Hawk",
        price: 29.2,
        category: "mens-regular",
      },
      {
        id: "mens-buzz-cut",
        name: "Men's Buzz Cut (Clippers Only)",
        price: 23.01,
        category: "mens-regular",
      },
      {
        id: "beard-trim",
        name: "Beard Trim",
        price: 15,
        category: "mens-regular",
      },
      {
        id: "neck-trim-edges",
        name: "Neck Trim & Edges",
        price: 15,
        category: "mens-regular",
      },
      {
        id: "mens-colour",
        name: "Colour",
        price: 79.45,
        category: "mens-regular",
      },
      {
        id: "mens-colour-cut",
        name: "Colour & Cut",
        price: 89.45,
        category: "mens-regular",
      },
      {
        id: "mens-full-head-bleach",
        name: "Full Head Bleach",
        price: 80,
        category: "mens-regular",
      },
      {
        id: "mens-highlights-cap-full",
        name: "Highlights - Cap (Full Head)",
        price: 95,
        category: "mens-regular",
      },
      {
        id: "mens-highlights-foil-full",
        name: "Highlights - Foil (Full Head)",
        price: 115,
        category: "mens-regular",
      },
      {
        id: "mens-perm",
        name: "Perm",
        price: 120,
        category: "mens-regular",
      },
    ],
  },
  {
    id: "mens-senior",
    name: "Men's Senior Rates (65+)",
    description: "Special pricing for our senior clients",
    services: [
      {
        id: "mens-senior-haircut",
        name: "Haircut",
        price: 24.78,
        category: "mens-senior",
      },
      {
        id: "mens-senior-colour",
        name: "Colour",
        price: 75,
        category: "mens-senior",
      },
      {
        id: "mens-senior-colour-cut",
        name: "Colour & Cut",
        price: 85,
        category: "mens-senior",
      },
    ],
  },
  {
    id: "teen-rates",
    name: "Teen Rates (10 - 13)",
    description: "Age-appropriate styling for teenagers",
    services: [
      {
        id: "teen-girls-haircut",
        name: "Girls Haircut",
        price: 30,
        category: "teen-rates",
      },
      {
        id: "teen-girls-wash-cut-blow-dry",
        name: "Girls Wash, Cut & Blow Dry",
        price: 40,
        category: "teen-rates",
      },
      {
        id: "teen-boys-haircut",
        name: "Boys Haircut",
        price: 24.87,
        category: "teen-rates",
      },
    ],
  },
  {
    id: "junior-rates",
    name: "Junior Rates",
    description: "Special pricing for children",
    services: [
      {
        id: "junior-boys-haircut-5-9",
        name: "Boys Haircut (5-9)",
        price: 21.24,
        category: "junior-rates",
      },
      {
        id: "junior-girls-haircut-5-9",
        name: "Girls Haircut (5-9)",
        price: 25,
        category: "junior-rates",
      },
    ],
  },
];

export const getAllServices = (): Service[] => {
  return serviceCategories.flatMap((category) => category.services);
};

export const getServiceById = (id: string): Service | undefined => {
  return getAllServices().find((service) => service.id === id);
};

export const getCategoryById = (id: string): ServiceCategory | undefined => {
  return serviceCategories.find((category) => category.id === id);
};

export const priceNote =
  "Note that prices shown exclude taxes. Prices subject to change.";
