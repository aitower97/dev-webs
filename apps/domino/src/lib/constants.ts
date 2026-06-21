export const BUSINESS = {
  name: "Dominó",
  legalName: "Restaurante Dominó",
  description:
    "Restaurante en Las Tablas, Madrid. Menús del día caseros para oficinas y ofertas de tarde para tomar algo después del trabajo.",
  phone: "912 000 000",
  phoneClean: "34912000000",
  email: "info@restaurantedomino.es",
  address: "Las Tablas, Madrid",
  fullAddress: {
    streetAddress: "Calle de las Tablas, 1",
    addressLocality: "Madrid",
    addressRegion: "Comunidad de Madrid",
    postalCode: "28050",
    addressCountry: "ES",
  },
  geo: {
    latitude: 40.5088,
    longitude: -3.6595,
  },
  url: "https://restaurantedomino.es",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48500!2d-3.66!3d40.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42!2sLas+Tablas!5e0!3m2!1ses!2ses!4v1",
};

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Carta", href: "/carta" },
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

export const OFERTAS_TARDE = [
  {
    title: "Caña + Tapa",
    price: "2,50€",
    description: "De lunes a viernes de 17:00 a 20:00",
  },
  {
    title: "Copa de vino + Tabla de ibéricos",
    price: "8,00€",
    description: "Ideal para compartir después del trabajo",
  },
  {
    title: "Combo After Work",
    price: "6,00€",
    description: "2 cañas + ración de patatas bravas",
  },
];
