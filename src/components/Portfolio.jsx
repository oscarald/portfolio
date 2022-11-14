import techstore from "../assets/images/techstore.png";
import videogames from "../assets/images/videogames.png";
import ventas from "../assets/images/ventas.png";
import bebidas from "../assets/images/bebida.png"
import Button2 from "./Button2";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      tittle: "Ecommerce TechStore",
      section:
        "Desarrollo de un e-commerce para venta de artículos electrónicos on-line conectado con pasarelas de pago y múltiples funciones. Desarrollado con React para el front-end y ExpressJS para el back-end",
      image: techstore,
      link: "https://techstore-ruby.vercel.app/",
    },
    {
      id: 2,
      tittle: "SPA Videogames",
      section:
        "Desarrollo de una SPA, con Node.js, Express.js y SQL con PostgreSQL. Para el front-end, la aplicación se desarrolló utilizando la librería React, junto con Redux.",
      image: videogames,
      link: "https://videogames-app-olive.vercel.app/",
    },
    {
      id: 3,
      tittle: "Sistema de ventas",
      section:
        "Desarrollo de un sistema de ventas que contiene módulos de almacen, compras, ventas, usuarios. Desarrollado con Laravel y VUE",
      image: ventas,
      link: "https://tienda.boskar.site/",
    },
    {
      id: 4,
      tittle: "Buscador de bebidas",
      section:
        "Desarrollo de una SPA desarrollada con react que permite buscar bebidas de acuerdo al nombre y la categoría, se esta usando la API https://www.thecocktaildb.com/api.php",
      image: bebidas,
      link: "https://oscarald.github.io/buscadorBebidas/",
    },
  ];
  return (
    <>
      <p className="font-Poppins font-semibold text-4xl text-slate-800 text-center">
        Portafolio
      </p>
      <p className="font-Poppins  text-lg font-medium pt-3 text-slate-500 text-center">
        Trabajos realizados
      </p>
      <div className="grid grid-cols-1 gap-4 mt-14 mb-20 lg:grid-cols-2 lg:mx-32">
        {projects.map((project) => (
          <div className="shadow-lg border rounded-lg p-6">
            <h3 className="font-Poppins font-semibold text-2xl text-slate-800 text-center mb-4">
              {project.tittle}
            </h3>
            <img
              src={project.image}
              alt={project.tittle}
              className="h-72 rounded-lg object-center mx-auto object-cover"
            />
            <p className="font-Poppins  text-lg font-medium pt-3 text-slate-500 text-justify m-3">
              {project.section}
            </p>
            <a href={project.link} target="_blank">
              <Button2 name="Demo" icon="faChevronRight" />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
