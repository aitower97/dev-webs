export const BUSINESS = {
  name: "Las Dos Terrazas",
  legalName: "Bar Restaurante Las Dos Terrazas",
  description:
    "Bar restaurante en Las Tablas, Madrid. Menús del día caseros, tapas, raciones y el mejor plan after work con happy hour todos los jueves.",
  phone: "615 925 089",
  phoneClean: "34615925089",
  instagram: "lasdosterrazas",
  instagramUrl: "https://www.instagram.com/lasdosterrazas",
  address: "Calle Isabel Colbrand, 10, Fuencarral - El Pardo, 28050 Madrid",
  shortAddress: "Las Tablas, Madrid",
  fullAddress: {
    streetAddress: "Calle Isabel Colbrand, 10",
    addressLocality: "Madrid",
    addressRegion: "Comunidad de Madrid",
    postalCode: "28050",
    addressCountry: "ES",
  },
  geo: {
    latitude: 40.5088,
    longitude: -3.6595,
  },
  url: "https://lasdosterrazas.es",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035!2d-3.66!3d40.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+Isabel+Colbrand+10+Madrid!5e0!3m2!1ses!2ses!4v1",
  hours: {
    weekdays: "Lunes a Viernes: 6:15 - 23:00",
    saturday: "Sábados: 9:30 - 23:30",
    sunday: "Domingos: Cerrado",
  },
};

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Carta", href: "/carta" },
  { label: "Reservas", href: "/reservas" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const MENU_DEL_DIA = {
  price: "12,50€",
  includes: "Primer plato + Segundo plato + Postre o café + Bebida",
  primeros: [
    "Ensalada mixta",
    "Sopa castellana",
    "Macarrones boloñesa",
    "Crema de verduras",
  ],
  segundos: [
    "Pollo al horno con patatas",
    "Merluza a la romana",
    "Lomo de cerdo a la plancha",
    "Tortilla española con ensalada",
  ],
  postres: ["Fruta del tiempo", "Natillas caseras", "Flan de huevo", "Café"],
};

export const OFERTAS = [
  {
    title: "Happy Hour",
    subtitle: "Todos los jueves",
    description: "19:00 a 20:00 — 2 copas por 1. Ron Barceló, Ginebra Beefeater, Whisky Ballantine's.",
    icon: "🍹",
  },
  {
    title: "Ofertón por Bebida",
    subtitle: "Grupos de 4+",
    description: "Pide tus bebidas y te invitamos a una ración. Mínimo 4 personas, a partir de las 17:00.",
    icon: "🍺",
  },
  {
    title: "3 Dobles por 6€",
    subtitle: "Todos los días",
    description: "3 dobles de cerveza por solo 6€. La mejor oferta de la zona.",
    icon: "🍻",
  },
];

export const TAPAS = [
  "Patatas bravas",
  "Croquetas de jamón",
  "Ensaladilla rusa",
  "Morcilla de Burgos",
  "Pincho de ternera con patatas",
  "Tabla de ibéricos",
  "Calamares a la romana",
  "Huevos rotos con jamón",
  "Pulpo a la gallega",
  "Torreznos de Soria",
];
