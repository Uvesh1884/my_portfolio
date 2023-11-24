import React from "react";
import Header from "./Header";
import { LuCheckSquare } from "react-icons/lu";
import Typewriter from "typewriter-effect";

function Experience() {
  return (
    <div>
      <Header />
      <div className="m-auto overflow-hidden max-w-[78vw] p-8 mt-[-1rem]">
        <div className="m-auto text-center leading-[2.3rem] mb-4 font-bold">
          <h6 className="text-[15px] text-gray-400">What Skills I Have</h6>
          <h1 className="text-3xl text-[#4bd5ff] font-bold">My Experience</h1>
        </div>
        <div className="flex">
          <div className="basis-2/4 bg-[#282a63] rounded-[3rem] m-4 p-7 hover:bg-transparent hover:border hover:border-[#4bd5ff]">
            <h4 className="text-xl text-[#4bd5ff] text-center font-bold">
              Front End developer
            </h4>
            <div className=" grid grid-cols-2 grid-rows-3 m-auto gap-8 p-8">
              <div className="font-semibold flex ">
                <span className="m-4 text-xl text-[#4bd5ff]">
                  <LuCheckSquare />
                </span>
                <span className="mt-[1rem]">HTML5</span>
              </div>
              <div className="font-semibold flex ">
                <span className="m-4 text-xl text-[#4bd5ff]">
                  <LuCheckSquare />
                </span>
                <span className="mt-[1rem]">CSS3</span>
              </div>
              <div className="font-semibold flex ">
                <span className="m-4 text-xl text-[#4bd5ff]">
                  <LuCheckSquare />
                </span>
                <span className="mt-[1rem]">TailwindCSS</span>
              </div>
              <div className="font-semibold flex ">
                <span className="m-4 text-xl text-[#4bd5ff]">
                  <LuCheckSquare />
                </span>
                <span className="mt-[1rem]">reactJS</span>
              </div>
              <div className="font-semibold flex ">
                <span className="m-4 text-xl text-[#4bd5ff]">
                  <LuCheckSquare />
                </span>
                <span className="mt-[1rem]">Redux-Toolkit</span>
              </div>
              <div className="font-semibold flex ">
                <span className="m-4 text-xl text-[#4bd5ff]">
                  <LuCheckSquare />
                </span>
                <span className="mt-[1rem]">GitHub</span>
              </div>
              <div className="font-semibold flex ">
                <span className="m-4 text-xl text-[#4bd5ff]">
                  <LuCheckSquare />
                </span>
                <span className="mt-[1rem]">NodeJS</span>
              </div>
            </div>
          </div>
          <div className="basis-2/4 bg-[#282a63] rounded-[3rem] m-4 p-5 hover:bg-transparent hover:border hover:border-[#4bd5ff]">
            <div>
              <h3 className="text-[#4bd5ff] font-extrabold">
                {
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("INTERNSHIP")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("HOUSYSTAN | REMOTE")
                        .start();
                    }}
                  />
                }
              </h3>
              <small className="text-gray-400">1st May - 31st Oct</small>
              <h5 className="text-[#4bd5ff] font-extrabold">
                {
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("FRONT END DEVELOPER |")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("FRONT END DEVELOPER")
                        .start();
                    }}
                  />
                }
              </h5>
              <p className="text-[14px] font-medium leading-6 mt-4">
                During my front-end development internship, I gained invaluable
                hands-on experience and deepened my understanding of web
                development. Collaborating with the team, I successfully
                translated design concepts into responsive and user-friendly
                interfaces. This internship not only honed my technical skills
                in HTML, CSS, and JavaScript but also enhanced my
                problem-solving abilities in a real-world context. Overall, it
                was a rewarding journey that fueled my passion for front-end
                development and provided a solid foundation for my future
                endeavors in the field.
              </p>
              <button className="border border-[#558bbd] text-center hover:bg-white mt-3 transition-all duration-300 ease-in  rounded-lg bg-transparent p-2 w-[8rem]">
                <a href="/contact" className="text-[#558bbd] text-sm font-bold">
                  Let's Talk
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
