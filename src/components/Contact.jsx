import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <p className="font-Poppins font-semibold text-4xl text-slate-800 text-center dark:text-gray-100" id="#contact">
        Contacto
      </p>
      <p className="font-Poppins  text-lg font-medium pt-3 text-slate-500 text-center dark:text-slate-300">
        Envíame un mensaje
      </p>
      <div className="flex flex-col mt-14 mb-20 mx-32 lg:flex-row">
        <div className="flex-1 mr-5">
          <div className="grid grid-cols-3 items-center">
            <div></div>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-indigo-600 text-3xl hover:text-indigo-700 cursor-pointer mr-3"
            />
            <div className="content-start">
              <div className="font-Poppins text-xl text-slate-800 font-semibold dark:text-slate-300">
                WhatsApp
              </div>
              <div className="font-Poppins text-base text-slate-600 dark:text-slate-400">
                +59174089941
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center ">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-indigo-600 text-3xl hover:text-indigo-700 cursor-pointer mr-3"
            />
            <div>
              <div className="font-Poppins text-xl text-slate-800 font-semibold dark:text-slate-300">
                Email
              </div>
              <div className="font-Poppins text-base text-slate-600 dark:text-slate-400">
                oscarald.mc@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Nombre
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Asunto
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Asunto"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
                
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Mensaje
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
                
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Enviar
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
