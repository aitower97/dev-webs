export const BUSINESS = {
  name: "Dialsa",
  legalName: "Piscinas y Calefacción Dialsa S.L.",
  tagline: "Piscinas y Calefacción",
  description:
    "Empresa familiar en Colmenar Viejo especializada en construcción y mantenimiento de piscinas, calefacción, sistemas de riego, instalación de gas, fontanería y aire acondicionado.",
  phone: "918 45 17 84",
  phoneClean: "34918451784",
  instagram: "dialsa.pyc",
  instagramUrl: "https://www.instagram.com/dialsa.pyc",
  address: "Avenida de Los Remedios, 6, 28770 Colmenar Viejo, Madrid",
  shortAddress: "Colmenar Viejo, Madrid",
  fullAddress: {
    streetAddress: "Avenida de Los Remedios, 6",
    addressLocality: "Colmenar Viejo",
    addressRegion: "Comunidad de Madrid",
    postalCode: "28770",
    addressCountry: "ES",
  },
  geo: {
    latitude: 40.6597,
    longitude: -3.7685,
  },
  areaServed:
    "Colmenar Viejo, Soto del Real, Manzanares el Real, San Agustín de Guadalix, Sierra Norte de Madrid",
  url: "https://dialsa.es",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.8!2d-3.7685!3d40.6597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+de+los+Remedios%2C+6%2C+28770+Colmenar+Viejo%2C+Madrid!5e0!3m2!1ses!2ses!4v1",
};

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Galería", href: "/galeria" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const SERVICES = [
  {
    title: "Piscinas",
    description:
      "Venta, construcción, montaje y mantenimiento de piscinas comunitarias y privadas. Sistemas de filtración, tratamiento de agua y climatización.",
    href: "/servicios#piscinas",
    image: "/images/pool-luxury.jpg",
  },
  {
    title: "Calefacción y Chimeneas",
    description:
      "Instalación de calderas, radiadores, suelo radiante y casetes de chimenea. Mantenimiento y reparación de sistemas de calefacción.",
    href: "/servicios#calefaccion",
    image: "/images/chimenea.jpg",
  },
  {
    title: "Depuradoras",
    description:
      "Instalación y mantenimiento de depuradoras y sistemas de tratamiento de agua para piscinas y comunidades.",
    href: "/servicios#depuradoras",
    image: "/images/sistema-filtracion.png",
  },
  {
    title: "Gas, Fontanería y Aire Acondicionado",
    description:
      "Instalación de gas, fontanería integral, obras de reforma y sistemas de aire acondicionado. Servicio técnico y reparaciones.",
    href: "/servicios#gas-fontaneria",
    image: "/images/plumbing-modern.jpg",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "/images/piscina-comunitaria.png",
    alt: "Piscina comunitaria construida por Dialsa en Colmenar Viejo",
  },
  {
    src: "/images/pool-luxury.jpg",
    alt: "Piscina de diseño con iluminación",
  },
  {
    src: "/images/piscina-escaleras.png",
    alt: "Detalle de escaleras de piscina con salvavidas",
  },
  {
    src: "/images/pool-night.jpg",
    alt: "Piscina con iluminación nocturna",
  },
  {
    src: "/images/piscina-jardin.png",
    alt: "Piscina privada en jardín en la Sierra de Madrid",
  },
  {
    src: "/images/hero-pool.jpg",
    alt: "Piscina exterior con vistas",
  },
];
