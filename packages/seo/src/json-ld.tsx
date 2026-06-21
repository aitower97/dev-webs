import type { LocalBusinessData, ServiceData, BreadcrumbItem } from "./types";

export function LocalBusinessJsonLd({ data }: { data: LocalBusinessData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": data.type,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: {
      "@type": "PostalAddress",
      ...data.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...data.geo,
    },
    openingHoursSpecification: data.openingHours,
    image: data.image,
    priceRange: data.priceRange,
    ...(data.servesCuisine && { servesCuisine: data.servesCuisine }),
    ...(data.hasMenu && { hasMenu: data.hasMenu }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceJsonLd({ data }: { data: ServiceData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "LocalBusiness",
      name: data.provider,
    },
    areaServed: data.areaServed,
    url: data.url,
    image: data.image,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
