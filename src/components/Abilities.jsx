import React from "react";

function Abilities() {
  const front = [
    {
      name: "CSS",
      percent: "80%",
    },
    {
      name: "Javascript",
      percent: "90%",
    },
    {
      name: "React",
      percent: "90%",
    },
    {
      name: "Redux",
      percent: "90%",
    },
    {
      name: "Vue",
      percent: "85%",
    },
    {
      name: "Vuex",
      percent: "80%",
    },
  ];
  const back = [
    {
      name: "NodeJs",
      percent: "90%",
    },
    {
      name: "Express",
      percent: "95%",
    },
    {
      name: "Sequelize",
      percent: "90%",
    },
    {
      name: "PHP",
      percent: "90%",
    },
    {
      name: "Laravel",
      percent: "95%",
    },
  ];
  const others = [
    {
      name: "GIT",
      percent: "95%",
    },
    {
      name: "Scrum",
      percent: "85%",
    },
    {
      name: "Docker",
      percent: "85%",
    },
    {
      name: "MySQL",
      percent: "90%",
    },
    {
      name: "PostgreSQL",
      percent: "90%",
    },
  ];
  return (
    <>
      <p className="font-Poppins font-semibold text-4xl text-slate-800 text-center mt-40 dark:text-gray-100">
        Habilidades
      </p>
      <p className="font-Poppins  text-lg font-medium pt-3 text-slate-500 text-center dark:text-gray-300">
        Nivel Técnico
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14  mx-32 mb-32">
        <div>
          <h3 className="font-Poppins text-center text-lg font-medium text-slate-800 dark:text-slate-300">
            Front End
          </h3>
          {front.map((ability) => (
            <>
              <p className="mt-2 dark:text-slate-300">{ability.name}</p>
              <div className="w-full bg-indigo-200 rounded-full h-2.5 ">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full mt-1"
                  style={{ width: ability.percent }}
                ></div>
              </div>
            </>
          ))}
        </div>
        <div>
          <h3 className="font-Poppins text-center text-lg font-medium text-slate-800 dark:text-slate-300">
            Back End
          </h3>
          {back.map((ability) => (
            <>
              <p className="mt-2 dark:text-slate-300">{ability.name}</p>
              <div className="w-full bg-indigo-200 rounded-full h-2.5 ">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full mt-1"
                  style={{ width: ability.percent }}
                ></div>
              </div>
            </>
          ))}
        </div>
        <div>
          <h3 className="font-Poppins text-center text-lg font-medium text-slate-800 dark:text-slate-300">
            Otros
          </h3>
          {others.map((ability) => (
            <>
              <p className="mt-2 dark:text-slate-300">{ability.name}</p>
              <div className="w-full bg-indigo-200 rounded-full h-2.5 ">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full mt-1"
                  style={{ width: ability.percent }}
                ></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Abilities;
