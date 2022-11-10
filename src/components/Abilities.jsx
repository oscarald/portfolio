import React from "react";

function Abilities() {
  return (
    <>
      <p className="font-Poppins font-semibold text-4xl text-slate-800 text-center mt-40">
        Habilidades
      </p>
      <p className="font-Poppins  text-lg font-medium pt-3 text-slate-500 text-center">
        Nivel Técnico
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14  mx-32 mb-32">
        <div>
          <h3 className="font-Poppins text-center text-lg font-medium text-slate-800">
            Front End
          </h3>
          <p className="mt-2">CSS</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "80%" }}
            ></div>
          </div>
          <p className="mt-2">Javascript</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "90%" }}
            ></div>
          </div>
          <p className="mt-2">React</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "90%" }}
            ></div>
          </div>
          <p className="mt-2">Redux</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "90%" }}
            ></div>
          </div>
          <p className="mt-2">Vue</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="mt-2">Vuex</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
        <div>
          <h3 className="font-Poppins text-center text-lg font-medium text-slate-800">
            Back End
          </h3>
          <p className="mt-2">NodeJs</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "90%" }}
            ></div>
          </div>

          <p className="mt-2">Express</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "85%" }}
            ></div>
          </div>

          <p className="mt-2">Sequelize</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="mt-2">PHP</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="mt-2">Laravel</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
        <div>
          <h3 className="font-Poppins text-center text-lg font-medium text-slate-800">
            Otros
          </h3>
          <p className="mt-2">GIT</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "95%" }}
            ></div>
          </div>
          <p className="mt-2">Scrum</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="mt-2">Docker</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "80%" }}
            ></div>
          </div>
          <p className="mt-2">MySQL</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="mt-2">PostgreSQL</p>
          <div className="w-full bg-indigo-200 rounded-full h-2.5 dark:bg-indigo-200">
            <div
              className="bg-indigo-600 h-2.5 rounded-full mt-1"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abilities;
