export const BUSINESS = {
  name: "Dialsa",
  legalName: "Dialsa Instalaciones y Servicios",
  description:
    "Empresa especializada en instalación y mantenimiento de piscinas, sistemas de riego, calefacción y aerotermia en Colmenar Viejo y la Sierra de Madrid.",
  phone: "918 000 000",
  phoneClean: "34918000000",
  email: "info@dialsa.es",
  address: "Colmenar Viejo, Madrid",
  fullAddress: {
    streetAddress: "Calle Principal, 1",
    addressLocality: "Colmenar Viejo",
    addressRegion: "Comunidad de Madrid",
    postalCode: "28770",
    addressCountry: "ES",
  },
  geo: {
    latitude: 40.6597,
    longitude: -3.7685,
  },
  url: "https://dialsa.es",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48492.45!2d-3.77!3d40.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f3!2sColmenar+Viejo!5e0!3m2!1ses!2ses!4v1",
};

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const SERVICES = [
  {
    title: "Piscinas",
    description:
      "Construcción, mantenimiento y rehabilitación de piscinas. Tratamiento de agua, sistemas de filtración y climatización.",
    icon: "🏊",
    href: "/servicios/piscinas",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Riegos",
    description:
      "Diseño e instalación de sistemas de riego automático para jardines, parques y zonas deportivas.",
    icon: "💧",
    href: "/servicios/riegos",
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Calefacción",
    description:
      "Instalación y mantenimiento de sistemas de calefacción, calderas, radiadores y suelo radiante.",
    icon: "🔥",
    href: "/servicios/calefaccion",
    color: "from-orange-500 to-red-400",
  },
  {
    title: "Aerotermia",
    description:
      "Sistemas de aerotermia de última generación. Climatización eficiente y sostenible para tu hogar.",
    icon: "🌿",
    href: "/servicios/aerotermia",
    color: "from-green-500 to-lime-400",
  },
];
