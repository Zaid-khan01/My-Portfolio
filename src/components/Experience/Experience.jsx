import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline and Cards */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Timeline Entries */}
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={experience.id}
              className={`relative mb-20 flex sm:flex-row ${isEven ? "sm:justify-end" : "sm:justify-start"
                } sm:items-center`}
            >
              {/* Mobile wrapper: flex only in mobile */}
              <div className="flex items-center sm:block">
                {/* Timeline Circle Icon */}
                {/* Timeline Circle Icon */}
                <div className="mr-4 sm:mr-0 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10 flex-shrink-0">
                  <div className="bg-gray-100 border-4 border-[#8245ec] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>


                {/* Content Card */}
                <div
                  className={`w-[85%] sm:w-[40%] mt-4 sm:mt-0 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${isEven
                      ? "sm:ml-auto sm:mr-10 ml-0"
                      : "sm:ml-10 sm:mr-auto ml-0"
                    }`}
                >
                  {/* Top Section: Logo & Role Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {experience.role}
                      </h3>
                      <h4 className="text-sm text-gray-300">{experience.company}</h4>
                      <p className="text-sm text-gray-500">{experience.date}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-400">{experience.desc}</p>

                  {/* Skills */}
                  <div className="mt-4">
                    <h5 className="font-medium text-white">Skills:</h5>
                    <ul className="flex flex-wrap mt-2">
                      {experience.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="bg-[#8245ec] text-gray-100 px-3 py-1 text-xs rounded-lg mr-2 mb-2 border border-gray-300"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
