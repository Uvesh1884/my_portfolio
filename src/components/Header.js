import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { TiContacts } from "react-icons/ti";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";

function Header() {
  return (
    <header className="overflow-hidden p-4">
      <ul className="flex z-10 flex-wrap rounded-[3rem] max-xl:left-[17%] max-xl:bottom-64 bg-[rgb(0,0,0,0.3)] max-w-fit justify-center fixed bottom-4 left-[28%] backdrop-blur-xl p-4">
        <li className="text-3xl mx-6 relative group rounded-[50%] hover:text-[#4bd5ff]">
          <Link to={"/"}>
            <IoHomeOutline />
          </Link>
          <span className=" absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className="text-3xl mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease">
          <Link to={"/Portfolio"}>
            <IoPersonOutline />
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className="text-3xl mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease">
          <Link to={"/experience"}>
            <BsPersonWorkspace />
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className="text-3xl mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease">
          <Link to={"/services"}>
            <MdDesignServices />
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className="text-3xl mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease">
          <Link to={"/testimonial"}>
            <VscFeedback />
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className="text-3xl mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease">
          <Link to={"/contact"}>
            <TiContacts />
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
        <li className="text-3xl mx-6 relative group hover:text-[#4bd5ff] transition-all 400ms ease">
          <Link to={"/about"}>
            <SiAboutdotme />
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-[0.20rem] bg-blue-400 transition-all group-hover:w-full"></span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
