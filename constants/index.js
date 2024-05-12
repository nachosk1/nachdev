export const optionNav = [
  {
    name: "Inicio",
    path: "#home",
  },
  {
    name: "Sobre mí",
    path: "#about",
  },
  {
    name: "Habilidades",
    path: "#skills",
  },
  {
    name: "Proyectos",
    path: "#projects",
  },
  {
    name: "Contacto",
    path: "#contact",
  },
];

export const listProjects = [
  {
    id: 1,
    title: "Cesfam Río Bueno",
    url: "/project/cesfam-rio-bueno",
    description:
      "Página web para el Centro de Salud Familiar de Río Bueno, la cual tiene como objetivo informar a la comunidad sobre los servicios que ofrece el centro y los horarios de atención. Además, dispone de una sección de noticias y un formulario para hacer feedback sobre la atención recibida.",
    link: "https://cesfam.nachdev.com",
    github: "",
    image: "/src/cesfam.webp",
    skills: ["NextJS", "Tailwind", "MySQL", "Strapi", "Axios"],
    type: "FullStack"
  },
  {
    id: 2,
    title: "Car-hub - Automóviles",
    url: "/project/car-hub",
    description:
      "Página web para entusiastas de los automóviles. Los usuarios pueden filtrar la información por marca, nombre, año y tipo de combustible, lo que facilita la búsqueda de vehículos específicos. La página consume una API de RapidAPI para obtener los datos de los vehículos, garantizando que la información esté actualizada.",
    link: "http://carhub.nachdev.com",
    github: "https://github.com/nachosk1/company-cars-client",
    image: "/src/carhub.webp",
    skills: ["NextJS", "Tailwind", "TypeScript"],
    type: "Frontend"
  },
  {
    id: 3,
    title: "Spacex Launches - Astro",
    url: "/project/spacex-launches",
    description:
      "Página web especializada en presentar los lanzamientos de SpaceX de manera detallada y actualizada. La plataforma sirve como un centro de información para entusiastas del espacio y profesionales del sector, ofreciendo acceso a datos sobre las misiones más recientes y antiguas. ",
    link: "http://spacex-astro.nachdev.com",
    github: "https://github.com/nachosk1/spacex-launches",
    image: "/src/spacex-astro.webp",
    skills: ["Astro", "Tailwind", "TypeScript"],
    type: "Frontend"
  },
  {
    id: 4,
    title: "Casa Finder",
    url: "/project/casa-finder",
    description:
      "Página web innovadora especializada en el arriendo y venta de propiedades vanguardistas. Esta plataforma permite a los usuarios filtrar las propiedades por ubicación, rango de precio y tipo de propiedad, facilitando la búsqueda de la casa ideal. Con una amplia gama de propiedades listadas y una interfaz de usuario intuitiva, nuestra página web se esfuerza por hacer que la búsqueda de una casa sea una experiencia agradable y eficiente.",
    link: "http://casa-finder.nachdev.com",
    github: "https://github.com/nachosk1/Property-Prime1",
    image: "/src/casa-finder.webp",
    skills: ["Vite", "React", "useContext"],
    type: "Frontend"
  },
];
