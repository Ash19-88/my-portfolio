import React from "react";
import { useTranslation } from "react-i18next";
import { project } from "../utils/projects";

const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <div
      name={t("projects")}
      className="bg-gradient-to-b from-slate-800 via-slate-800 to-fuchsia-800 w-full text-white md:h-full font-Raleway"
    >
      <div className="max-w-screen-lg w-auto py-10 md:px-20 lg:px-24 px-8 mx-auto flex flex-col justify-center min-h-screen">
        <div className="pb-8 pt-20 md:pt-2">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-slate-400">
            {t("projects")}
          </p>
          <p className="py-6 md:pt-6 md:pb-1">{t("projectsSubtitle")}</p>
        </div>

        <div className="flex flex-wrap   justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 sm:px-0">
          {project.map(({ id, src, github, site, style }) => (
            <div key={id} className={`shadow-md rounded-xl ${style}`}>
              <img
                src={src}
                alt="project Simple Service"
                className="rounded-xl duration-200 shadow-sm shadow-white hover:scale-105"
              />
              <div className="flex flex-row items-center justify-center">
                <div>
                  <a href={site}>
                    <button className="w-1/2 m-4 duration-200 hover:scale-125">
                      {t("demo")}
                    </button>
                  </a>
                </div>
                <div>
                  <a href={github}>
                    <button className="w-1/2 m-4 duration-200 hover:scale-125">
                      {t("code")}
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
