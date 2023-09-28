import React from "react";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import express from "../assets/express.png";
import typescript from "../assets/typescript.png";

const Experience = () => {
  const logos = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "TailwindCSS",
      style: "shadow-blue-300",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-fuchsia-800 to-slate-800 w-full h-screen font-Raleway"
    >
      <div className="max-w-screen-lg mx-auto p-4 lg:px-20 flex flex-col justify-center w-full text-white">
        <div className="pt-20 lg:pt-16 2xl:pt-32">
          <p className="text-2xl md:text-4xl font-bold border-b-4 border-slate-400 px-2 pb-2 inline ">
            Experience
          </p>
          <p className="pt-4 pb-0 md:pt-8 text-xl md:text-2xl">
            These are technologies, some frameworks and tools I've worked with
          </p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-6 px-12
        sm:px-0 md:gap-10 md:py-10"
        >
          {logos.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 pt-2 duration-500 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-6 mx-auto sm:w-14" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
