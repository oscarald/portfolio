import React from "react";
import { SocialLinks } from "./SocialLinks";
import image from "../assets/images/webdesign.png";
import Button2 from "./Button2";

function Presentation() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <SocialLinks />
      <div className="col-span-2 flex flex-col justify-center gap-4 ">
        <h2 className="text-4xl font-Poppins font-semibold text-slate-800">
          Hola, soy Billy
        </h2>
        <p className="text-xl font-Poppins font-medium py-4 text-slate-600">
          Full Stack Developer
        </p>
        <p className="font-Poppins text-slate-600">
          Tengo conocimientos en varias tecnologías, y me
          gusta aprender nuevas cosas y buscar la mejor solución a los
          problemas.
        </p>
        <Button2 name="Contacto" icon="faChevronRight"/>
      </div>

      <div className="col-span-2 py-60 ">
        <img src={image} alt="web design" />
      </div>
    </div>
  );
}

export default Presentation;
