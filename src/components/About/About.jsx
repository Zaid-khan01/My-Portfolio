import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profilePic.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 bg-transparent"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">Zaid Khan</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#8245ec] mb-4">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Frontend Developer',
                'Graphic Designer',
                'DSA Enthusiast',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mt-6 mb-8">
            I am a passionate frontend developer with a strong interest in user-centric
            design and modern UI/UX. With a solid foundation in graphic design and
            problem solving through data structures and algorithms, I bring creativity
            and logic together to build impactful digital experiences.
          </p>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 5px #a855f7, 0 0 15px #a855f7',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Profile Image with Moderate Purple Glow */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[24rem] md:h-[24rem] rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            style={{
              boxShadow: '0 0 10px #a855f7, 0 0 25px #c084fc',
              borderRadius: '50%',
            }}
          >
            <img
              src={profileImage}
              alt="Zaid Khan"
              className="w-full h-full object-cover rounded-full"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
