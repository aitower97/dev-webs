export const BUSINESS = {
  name: "Dialsa",
  legalName: "Piscinas y Calefacción Dialsa S.L.",
  tagline: "Piscinas y Calefacción",
  description:
    "Empresa familiar en Colmenar Viejo con servicio en toda la Sierra Norte de Madrid. Especialistas en piscinas, calefacción, depuradoras, aerotermia y aire acondicionado.",
  phone: "918 45 17 84",
  phoneClean: "34918451784",
  whatsapp: "34624432508",
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
  url: "https://dialsapyc.es",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1514.9!2d-3.7685!3d40.6597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422e4a3de29d69%3A0x1!2sAv.+de+Los+Remedios%2C+6%2C+28770+Colmenar+Viejo%2C+Madrid%2C+Spain!5e0!3m2!1ses!2ses",
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
    category: "Piscinas",
    description:
      "Venta, construcción, montaje y mantenimiento de piscinas comunitarias y privadas. Sistemas de filtración, tratamiento de agua y climatización.",
    href: "/servicios#piscinas",
    image: "/images/piscinas/piscina-jardin-colmenar.jpg",
  },
  {
    title: "Calefacción y Chimeneas",
    category: "Calefacción",
    description:
      "Instalación de calderas, radiadores, suelo radiante y casetes de chimenea. Mantenimiento y reparación de sistemas de calefacción.",
    href: "/servicios#calefaccion",
    image: "/images/chimeneas/chimenea.jpg",
  },
  {
    title: "Depuradoras",
    category: "Depuradoras",
    description:
      "Instalación y mantenimiento de depuradoras, sistemas de filtración y tratamiento de agua para piscinas privadas y comunitarias.",
    href: "/servicios#depuradoras",
    image: "/images/depuradoras/depuradora-sistema-completo.png",
  },
  {
    title: "Aire Acondicionado, Aerotermias, Calderas y Termos",
    category: "Climatización",
    description:
      "Instalación y mantenimiento de aire acondicionado, sistemas de aerotermia, calderas, termos, suelo radiante y colectores. Eficiencia energética para tu hogar.",
    href: "/servicios#climatizacion",
    image: "/images/aerotermias/caldera-termo-instalacion.jpeg",
  },
];

export type GalleryCategory = "todas" | "piscinas" | "chimeneas" | "depuradoras" | "aerotermias" | "obras";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // Piscinas
  {
    src: "/images/piscinas/piscina-jardin-colmenar.jpg",
    alt: "Piscina privada con jardín en Colmenar Viejo",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-cesped-artificial.jpg",
    alt: "Piscina con césped artificial y jardín",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-piedra-natural.jpg",
    alt: "Piscina de diseño con acabado en piedra natural",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-construccion-piedra.jpg",
    alt: "Construcción de piscina — revestimiento en piedra",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-obra-panoramica.jpg",
    alt: "Piscina en construcción — panorámica de obra",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-pequena-moderna.jpg",
    alt: "Piscina pequeña con acabado moderno",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-gresite-detalle.jpg",
    alt: "Detalle de piscina terminada con gresite",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-escaleras-integradas.jpg",
    alt: "Piscina moderna con escaleras integradas",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-cobertor-automatico.jpg",
    alt: "Cobertor automático de piscina instalado",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-cobertor-sistema.jpg",
    alt: "Sistema de cobertor de piscina",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-comunitaria.jpeg",
    alt: "Piscina comunitaria mantenida por Dialsa",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-jardin-vista.jpg",
    alt: "Vista de piscina privada terminada",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-piedra-gris.jpg",
    alt: "Piscina con acabado en piedra gris",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-detalle-acabado.jpg",
    alt: "Detalle de acabado de piscina",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-construccion-fase.jpg",
    alt: "Piscina durante fase de construcción",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-obra-panoramica-2.jpg",
    alt: "Vista panorámica de obra de piscina",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-cesped-general.jpg",
    alt: "Piscina con jardín — vista general",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/jacuzzi-gresite-circular.jpg",
    alt: "Jacuzzi circular con acabado en gresite",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-escaleras-gresite-azul.jpg",
    alt: "Piscina con escaleras de obra y gresite azul",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-exterior-con-ducha.jpeg",
    alt: "Piscina exterior terminada con ducha integrada",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-exterior-con-ducha-2.jpeg",
    alt: "Piscina exterior con ducha y solado",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-prefabricada-poliester.jpeg",
    alt: "Piscina prefabricada de poliéster instalada",
    category: "piscinas",
  },
  {
    src: "/images/piscinas/piscina-prefabricada-poliester-2.jpeg",
    alt: "Piscina prefabricada de poliéster terminada",
    category: "piscinas",
  },
  // Chimeneas
  {
    src: "/images/chimeneas/chimenea.jpg",
    alt: "Chimenea de leña encendida — ambiente acogedor",
    category: "chimeneas",
  },
  {
    src: "/images/chimeneas/casete-rustico.jpg",
    alt: "Casete de chimenea instalado con acabado rústico",
    category: "chimeneas",
  },
  {
    src: "/images/chimeneas/casete-piedra.jpg",
    alt: "Instalación de casete de chimenea en piedra",
    category: "chimeneas",
  },
  {
    src: "/images/chimeneas/chimenea-moderna-empotrada.jpg",
    alt: "Chimenea moderna con casete empotrado",
    category: "chimeneas",
  },
  {
    src: "/images/chimeneas/casete-instalacion-terminada.jpg",
    alt: "Casete de chimenea — instalación terminada",
    category: "chimeneas",
  },
  // Depuradoras
  {
    src: "/images/depuradoras/depuradora-caseta.png",
    alt: "Depuradora de piscina en caseta exterior",
    category: "depuradoras",
  },
  {
    src: "/images/depuradoras/depuradora-filtro-rojo.png",
    alt: "Sistema de filtración con filtro de arena",
    category: "depuradoras",
  },
  {
    src: "/images/depuradoras/depuradora-cuarto-tecnico.png",
    alt: "Cuarto técnico con depuradora industrial",
    category: "depuradoras",
  },
  {
    src: "/images/depuradoras/depuradora-arqueta.png",
    alt: "Arqueta con sistema de control de depuración",
    category: "depuradoras",
  },
  {
    src: "/images/depuradoras/depuradora-sistema-completo.png",
    alt: "Sistema completo de depuración y filtración",
    category: "depuradoras",
  },
  // Aerotermias / Climatización
  {
    src: "/images/aerotermias/caldera-termo-instalacion.jpeg",
    alt: "Caldera y termo eléctrico instalados",
    category: "aerotermias",
  },
  {
    src: "/images/aerotermias/suelo-radiante-instalacion.jpeg",
    alt: "Instalación de suelo radiante con tubería",
    category: "aerotermias",
  },
  {
    src: "/images/aerotermias/suelo-radiante-mortero.jpeg",
    alt: "Suelo radiante en fase de mortero",
    category: "aerotermias",
  },
  {
    src: "/images/aerotermias/cuadro-colectores-abierto.jpeg",
    alt: "Cuadro de colectores de suelo radiante",
    category: "aerotermias",
  },
  {
    src: "/images/aerotermias/cuadro-colectores-cerrado.jpeg",
    alt: "Armario de colectores instalado",
    category: "aerotermias",
  },
  // Obras
  {
    src: "/images/obras/jacuzzi-construccion-cenital.jpg",
    alt: "Construcción de jacuzzi circular — fase de obra",
    category: "obras",
  },
  {
    src: "/images/obras/jacuzzi-construccion-tuberias.jpg",
    alt: "Estructura de jacuzzi en construcción con tuberías",
    category: "obras",
  },
  {
    src: "/images/obras/solado-exterior-piscina.jpg",
    alt: "Detalle de solado exterior para piscina",
    category: "obras",
  },
  {
    src: "/images/obras/ducha-exterior-piscina.jpg",
    alt: "Ducha exterior de piscina instalada",
    category: "obras",
  },
  {
    src: "/images/obras/hornacina-azulejo-obra.jpeg",
    alt: "Hornacina de baño en fase de obra",
    category: "obras",
  },
  {
    src: "/images/obras/hornacina-bano-terminada.jpeg",
    alt: "Hornacina de baño terminada con azulejo decorativo",
    category: "obras",
  },
];

export const VIDEOS = [
  {
    src: "/videos/piscina-funcionamiento.mp4",
    title: "Piscina terminada en funcionamiento",
    poster: "/images/piscinas/piscina-piedra-natural.jpg",
  },
  {
    src: "/videos/montaje-depuradora.mp4",
    title: "Montaje completo de depuradora",
    poster: "/images/depuradoras/depuradora-sistema-completo.png",
  },
  {
    src: "/videos/construccion-jacuzzi.mp4",
    title: "Proceso de construcción de jacuzzi",
    poster: "/images/obras/jacuzzi-construccion-cenital.jpg",
  },
  {
    src: "/videos/contruccion-piscina.mp4",
    title: "Construcción de piscina paso a paso",
    poster: "/images/piscinas/piscina-construccion-fase.jpg",
  },
  {
    src: "/videos/depuradora-montaje.mp4",
    title: "Montaje e instalación de depuradora",
    poster: "/images/depuradoras/depuradora-sistema-completo.png",
  },
];

export const GALLERY_CATEGORIES: { key: GalleryCategory; label: string }[] = [
  { key: "todas", label: "Todos" },
  { key: "piscinas", label: "Piscinas" },
  { key: "chimeneas", label: "Chimeneas" },
  { key: "depuradoras", label: "Depuradoras" },
  { key: "aerotermias", label: "Climatización" },
  { key: "obras", label: "Obras" },
];
