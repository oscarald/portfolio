import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import techstore from "../assets/images/techstore.png"
import videogames from "../assets/images/videogames.png"
import ventas from "../assets/images/ventas.png"
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
  ];
  return (
    <>
      <p className="font-Poppins font-semibold text-4xl text-slate-800 text-center">
        Portafolio
      </p>
      <p className="font-Poppins  text-lg font-medium pt-3 text-slate-500 text-center">
        Trabajos realizados
      </p>
      <div className="flex flex-col mt-14 mb-20 mx-32 lg:flex-row">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="flex flex-col md:flex-row" >
                <img
                  className="object-scale-down w-full flex-1 m-5 rounded-lg"
                  src={project.image}
                  alt="image slide 1"
                />
                <div className="flex-1 ">
                    <h3 className="font-Poppins font-semibold text-2xl text-slate-800 mb-5">{project.tittle}</h3>
                    <p className="font-Poppins font-medium text-lg text-slate-500 text-justify mb-5">{project.section}</p>
                    <a href={project.link} target="_blank">
                        <Button2 name="Demo" icon="faChevronRight"/>
                    </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Portfolio;
