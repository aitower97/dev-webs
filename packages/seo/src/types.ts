export interface LocalBusinessData {
  type: "LocalBusiness" | "Restaurant";
  name: string;
  description: string;
  url: string;
  telephone: string;
  email?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  image?: string;
  priceRange?: string;
  servesCuisine?: string[];
  hasMenu?: string;
}

export interface ServiceData {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  url: string;
  image?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  siteName: string;
  locale: string;
  ogImage?: string;
}
