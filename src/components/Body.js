import React from "react";
import Header from "./Header";
import CV from "../utils/assets/cv.pdf";
import ME from "../utils/assets/me.png";
import SocialLinks from "./SocialLinks";

function Body() {
  return (
    <div>
      <Header />
      <div className="m-auto overflow-hidden max-w-[50rem] p-8">
        <div className="m-auto text-center leading-[2.3rem] font-bold mt-8">
          <h6 className="text-[15px]">Hello, I am</h6>
          <h1 className="text-4xl">Uvesh Sadeki</h1>
          <h6 className="text-gray-400 text-[12px]">Front end developer</h6>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href={CV}
            className="border border-[#558bbd] text-center hover:bg-white transition-all 400ms ease text-[#558bbd] text-sm font-bold rounded-lg bg-transparent p-2"
          >
            Download CV
          </a>
          <a
            href="/contact"
            className="bg-[#4bd5ff] text-[#558bbd] text-center text-sm hover:bg-white transition-all 500ms ease font-semibold p-3 rounded-lg ml-4"
          >
            Let's tolk
          </a>
        </div>
        <div className="w-[22rem] h-[22rem] mt-[5rem] overflow-visible  m-auto bg-gradient-to-b rounded-r-[12rem] rounded-l-[12rem] from-[#479dd8]" >
          <img src={ME} alt="Photo" />
        </div>
        </div>
        <div>
          <SocialLinks />
        </div>
    </div>
  );
}

export default Body;
