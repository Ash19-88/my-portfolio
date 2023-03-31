import React from 'react';
import simpleServicePortfolio from "../assets/simpleServicePortfolio.gif";
import videogamePortfolio from "../assets/videogamePortfolio.gif";

const Projects = () => {
  const project = [
    {
      id: 1,
      src: simpleServicePortfolio,
      github: "https://github.com/PDG94/simpleservice",
      site: "https://simpleservice-lemon.vercel.app/"
    },
    {
      id: 2,
      src: videogamePortfolio,
      github: "https://github.com/Ash19-88/PI-videogames",
      site: "https://pi-videogames-ash19-88.vercel.app/"
    },
  ]
  return (
    <div name="projects" className='bg-gradient-to-b from-slate-800 via-slate-800 to-fuchsia-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-20 md:pt-2'>
         <p className='text-2xl md:text-4xl font-bold inline border-b-4 border-slate-400'>Projects</p>
         <p className='py-6 md:pt-6 md:pb-1'>Check out some of my work here</p>
        </div>
        
        <div className='grid sm:grid-cols-4 md:grid-cols-2 gap-6 md:gap-8 px-6 
         sm:px-0'>
        {
          project.map(({ id, src, github, site }) => (
        <div  key={id} className='shadow-md shadow-white rounded-xl'>
              <img src={src} alt="project Simple Service" className='rounded-xl duration-200 shadow-sm shadow-white hover:scale-105' />
              <div className='flex items-center justify-center'>
                <a href={site}>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'>Demo</button>
                </a>
                <a href={github}>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'>Code</button>
                </a>
          </div>
          </div>
            
            ))
          }
          </div>
      </div>
    </div>
  )
}

export default Projects
