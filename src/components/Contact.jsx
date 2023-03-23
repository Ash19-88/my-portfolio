import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-slate-800 to-fuchsia-800  p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-1 pt-40 md:pt-0'>
          <p className='text-4xl font-bold inline  border-b-4 border-slate-400'>Contact me</p>
          <p className='py-6'>Please fill in the form to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/2285d3d7-f62c-475d-9536-e3d451f03ea3" method="POST" className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none' />
            <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none' />
            <textarea name="message" rows="10"
            placeholder='Enter your message'  
            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none
             '></textarea>
            <button className='text-white bg-gradient-to-l from-cyan-400 to-fuchsia-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-125 duration-300'>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact