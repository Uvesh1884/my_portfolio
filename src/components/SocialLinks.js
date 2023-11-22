import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { CgInstagram } from "react-icons/cg";
import { SiFacebook } from "react-icons/si";

function SocialLinks() {
  return (
    <div className="left-56 p-4 fixed top-2/3 gap-8 text-2xl text-[#558bbd] flex flex-col">
      <a
        href="https://www.linkedin.com/in/uvesh-sadeki-a478b7232/"
        target="_blank"
        className="hover:text-white"
      >
        <CiLinkedin />
      </a>
      <a
        href="https://www.instagram.com/uvesh_sadeki"
        target="_blank"
        className="hover:text-white"
      >
        <CgInstagram />
      </a>
      <a
        href="https://www.facebook.com/uvesh.sadeki.1"
        target="_blank"
        className="hover:text-white"
      >
        <SiFacebook />
      </a>
    </div>
  );
}

export default SocialLinks;
