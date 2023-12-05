import React from "react";
import simpleServicePortfolio from "../assets/simpleServicePortfolio.gif";
import videogamePortfolio from "../assets/videogamePortfolio.gif";
import starwars from "../assets/starwars.gif";
import thinderpet from "../assets/thinderpetPortfolio.gif";
import nearbytour from "../assets/nearbytour.gif";

const Projects = () => {
  const project = [
    {
      id: 1,
      src: nearbytour,
      github: "https://github.com/No-Country/s11-21-react-next",
      site: "https://nearbytour.vercel.app/home",
    },
    {
      id: 2,
      src: thinderpet,
      github: "https://github.com/No-Country/c13-36-t-node-react",
      site: "https://thinderpet.vercel.app/",
    },
    {
      id: 3,
      src: videogamePortfolio,
      github: "https://github.com/Ash19-88/PI-videogames",
      site: "https://videogames-ashtech.vercel.app/",
    },
    {
      id: 4,
      src: simpleServicePortfolio,
      github: "https://github.com/Edwards0307/simpleservice",
      site: "https://simple-service-ivory.vercel.app/",
    },
    {
      id: 5,
      src: starwars,
      github: "https://github.com/Ash19-88/star-wars",
      site: "https://star-wars-ashtechsolutions.netlify.app/",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-slate-800 via-slate-800 to-fuchsia-800 w-full text-white md:h-screen font-Raleway"
    >
      <div className="max-w-[75vw] py-4 md:px-20 px-8 mx-auto flex flex-col justify-center w-full min-h-screen">
        <div className="pb-8 pt-20 md:pt-2">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-slate-400">
            Projects
          </p>
          <p className="py-6 md:pt-6 md:pb-1">Check out some of my work here</p>
        </div>

        <div className="flex flex-wrap   justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 sm:px-0">
          {project.map(({ id, src, github, site }) => (
            <div key={id} className="shadow-md shadow-white rounded-xl">
              <img
                src={src}
                alt="project Simple Service"
                className="rounded-xl duration-200 shadow-sm shadow-white hover:scale-105"
              />
              <div className="flex flex-row items-center justify-center">
                <div>
                  <a href={site}>
                    <button className="w-1/2 m-4 duration-200 hover:scale-125">
                      Demo
                    </button>
                  </a>
                </div>
                <div>
                  <a href={github}>
                    <button className="w-1/2 m-4 duration-200 hover:scale-125">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
