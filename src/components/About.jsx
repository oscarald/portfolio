import image from "../assets/images/coding.jpg";
import Button2 from "./Button2";

export default function About() {
  return (
    <>
      <p className="font-Poppins font-semibold text-4xl text-slate-800 text-center">
        Acerca de mí
      </p>
      <p className="font-Poppins  text-lg font-medium pt-3 text-slate-500 text-center">
        Inicio
      </p>
      <div className="flex flex-col mt-14 mb-20 mx-32 lg:flex-row">
        <img src={image} alt="coding" className="lg:h-72 rounded-xl m-10 h-60" />
        <div className="mx-10 lg:mx-0">
          <p className="font-Poppins font-medium text-slate-500 text-justify my-8">
            Diseñador web, con gran conocimiento y años de experiencia,
            trabajando en aplicaciones web, analogía web, wordpress, elementor y
            siempre entregando un trabajo de calidad.
          </p>
          <div className="flex justify-center">
            <div className="mr-5">
              <p className="font-Poppins font-semibold text-2xl text-center text-slate-800 ">
                1+
              </p>
              <p className="font-Poppins text-slate-500 text-center">
                Años de Experiencia
              </p>
            </div>
            <div className="mb-4">
              <p className="font-Poppins font-semibold text-2xl text-center text-slate-800">
                10+
              </p>
              <p className="font-Poppins text-slate-500 text-center">
                Proyectos Realizados
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button2 name="Descargar CV" icon="faDownload" />
          </div>
        </div>
      </div>
    </>
  );
};
