import React,{useState} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import hero from '../assets/img.png'
import Contact from './Contact'
const Home = () => {
  const[nav,setNav]=useState(false)
    const handleClick =()=>setNav(!nav)
  return (
    <section
      name="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-white"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover"/>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm <span>SUMON M.</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
           I'm a Fullstack Developer specializing in MERN technology. Currently i am focused on building responsive full-stack web applications
          </h4>
          <div>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
          <button className="btn-primary mt-8">
            Contact Me
          </button>
          </Link>
          </div>
          <div className="flex-1 flex items-center justify-center h-full">
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
           
          <button className='text-white group border-2 px-6 py-3 my-5  flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
          </div>
        
         
          
          
        </div>
      </div>
    </section>
  )
}

export default Home