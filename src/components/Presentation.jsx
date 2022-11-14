import React from "react";
import { SocialLinks } from "./SocialLinks";
import image from "../assets/images/webdesign.png";
import Button2 from "./Button2";

function Presentation() {
  return (
    <div className="grid sm:grid-cols-5 grid-cols-3 gap-3">
      <SocialLinks className="order-1" />
      <div className="col-span-3 sm:col-span-2 flex flex-col justify-center gap-4 order-3 sm:order-2 mx-5 sm:mx-0 mb-28">
        <h2 className="text-4xl font-Poppins font-semibold text-slate-800 dark:text-gray-100">
          Hola, soy Billy
        </h2>
        <p className="text-xl font-Poppins font-medium py-4 text-slate-600 dark:text-gray-200">
          Full Stack Developer
        </p>
        <p className="font-Poppins text-slate-600 dark:text-gray-300 text-justify">
          Tengo conocimientos en varias tecnologías, y me
          gusta aprender nuevas cosas y buscar la mejor solución a los
          problemas.
        </p>
        <Button2 name="Contacto" icon="faChevronRight"/>
      </div>

      <div className="col-span-2 sm:py-60 py-10 order-2 sm:order-3">
        <img src={image} alt="web design" />
      </div>
    </div>
  );
}

export default Presentation;
