import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white md:py-2"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, I am a Full Stack Developer gratuated from Motilal Nehru National Institute of Technology, Allahabad.
          I love to build highly responsive web apps with modern UI design Concepts. I am always ready to learn
          new Technologies and Skills and open for new adventures and experiences.
        </p>

        <br />

        <p className="text-xl">
        I have the ability to adapt in both self-starting and collaborative enviroment
         while staying focus on achieving high quality results under strict deadlines. I am eager to obtain
          a challenging position at a prestigious company to expand my learning and build upon my
           developer skills.
        </p>
      </div>
    </div>
  );
};

export default About;