import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='border bg-gradient-to-r from-[4bd5ff] to-transparent border-white'>
      <ul className='flex justify-center m-6'>
        <li className='mx-6 relative group hover:text-[#4bd5ff]'><Link to={"/"}>Home</Link>
        <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className='mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease'><Link to={"/Portfolio"}>Portfolio</Link>
        <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className='mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease'><Link to={"/experience"}>Experience</Link>
        <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className='mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease'><Link  to={"/services"}>Services</Link>
        <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className='mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease'><Link to={"/testimonial"}>Testimonial</Link>
        <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className='mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease'><Link to={"/contact"}>Contact Me</Link>
        <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className='mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease'><Link to={"/about"}>About me</Link>
        <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
      </ul>
    </header>
  )
}

export default Header