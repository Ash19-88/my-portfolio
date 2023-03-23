import React from 'react'

const About = () => {
  return (
     <div name="about" className="w-full h-screen bg-gradient-to-b from-fuchsia-800 to-slate-800">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-1 ">
          <p className="text-4xl font-bold inline border-b-4  border-slate-400 text-white">About</p>
        </div>
        <div className='ml-3 mr-3 mt-7'>
        <p className="text-l md:mt-10 md:text-2xl text-white font-semibold ">
          Hi! I'm Ash, a creative and results-driven full-stack developer.</p>
        <p className="text-l md:text-2xl mt-1 text-white font-semibold">
        I've worked with a variety of technologies in web development, including languages such as JavaScript and SQL.
        </p>
        <p className="text-l md:text-2xl mt-1 text-white font-semibold ">
          For user experience, I've been developing with React, Redux, Hooks, React-Router, Bootstrap, TailwindCSS, CSS and more. On the Back-End, I've been working with Node.js and Express, and in terms of databases, I've been storing and organizing data with Sequelize, PostgreSQL, SQLite, among others. Also, I have experience with tools like GitHub, Postman, Trello, Slack, Visual Studio, Vercel, Canva, Figma and Firebase. At the moment, I'm learning PhP and MySQL.</p>
          <p className="text-l md:text-2xl mt-1 text-white font-semibold "> 
          My background as an English teacher helped me to develop useful soft skills, such as leadership, teamwork and proactive problem-solving. Also, I'm well-organized in managing projects and timelines. Above all, I'm passionate about technology, thrive in collaborative environments and open to new challenges.
        </p>
          </div>
      </div>
    </div>
  )
}

export default About