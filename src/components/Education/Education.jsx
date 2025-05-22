import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={edu.id}
              className={`relative mb-20 flex sm:flex-row ${isEven ? "sm:justify-end" : "sm:justify-start"} sm:items-center`}
            >
              {/* Wrapper for icon and card */}
              <div className="flex items-center sm:block">
                {/* Timeline Icon */}
                <div className="mr-4 sm:mr-0 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10 flex-shrink-0">
                  <div className="bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-[85%] sm:w-[40%] mt-4 sm:mt-0 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105
                    ${isEven ? "sm:ml-auto sm:mr-10 ml-0" : "sm:ml-10 sm:mr-auto ml-0"}
                  `}
                >
                  {/* Flex container for logo and text */}
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-xl font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                  <p className="mt-4 text-gray-400">{edu.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
