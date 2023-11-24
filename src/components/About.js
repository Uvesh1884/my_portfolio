import React from "react";
import meImg from "../utils/assets/me-about.jpg";
import { CiTrophy } from "react-icons/ci";
import { LuProjector } from "react-icons/lu";
import Header from "./Header";

function About() {
  return (
    <div>
      <Header />
      <div className=" m-auto overflow-hidden max-w-[80vw] p-8 mt-[-1rem]">
        <div className="m-auto text-center leading-[2.3rem] mb-8 font-bold">
          <h6 className="text-[15px] text-gray-400">Get To Konw</h6>
          <h1 className="text-3xl text-[#558bbd] font-bold">About me</h1>
        </div>
        <div className="flex gap-36">
          <div className="basis-[40%] bg-gradient-to-bl from-[rgba(0,0,0,0.7)] bg-[#558bbd] rounded-2xl flex justify-center">
            <img
              src={meImg}
              alt="About Image"
              className="rotate-12 transition-all duration-200 ease-in hover:rotate-0 rounded-2xl"
            />
          </div>
          <div className=" basis-[60%] flex flex-col justify-center">
            <div className="flex gap-14">
              <div className="transition-all duration-500 ease-in cursor-pointer w-[10rem] rounded-2xl bg-[#292b66] h-[10rem] hover:bg-transparent border border-[#292b66] grid place-content-center text-center">
                <span className="m-auto text-xl">
                  <CiTrophy />
                </span>
                <span className="font-bold my-4">Internship</span>
                <h6 className="m-auto text-gray-400 text-[14px]">6 Months</h6>
              </div>
              <div className="transition-all duration-300 ease-in rounded-2xl cursor-pointer bg-[#292b66] hover:bg-transparent border border-[#292b66] w-[10rem] h-[10rem] grid place-content-center text-center">
                <span className="m-auto text-xl">
                  <LuProjector />
                </span>
                <span className="font-bold my-4">Projects</span>
                <h6 className="m-auto text-gray-300 text-[14px]">10+</h6>
              </div>
            </div>
            <p className="text-[12px] my-4">
              During my academic journey and personal projects, I have honed my
              skills in HTML, CSS, and JavaScript, with a focus on creating
              responsive and visually appealing web interfaces. I am eager to
              apply my knowledge and continue learning to stay up-to-date with
              the latest front-end technologies and best practices.
            </p>
            <button className="border border-[#558bbd] text-center hover:bg-white transition-all duration-300 ease-in  rounded-lg bg-transparent p-2 w-[8rem]">
              <a href="/contact" className="text-[#558bbd] text-sm font-bold">
                Let's Talk
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
