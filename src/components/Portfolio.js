import React from "react";

import reactWeather from "../assets/portfolio/reactWeather.jpg";
import carouselSlider from "../assets/portfolio/carouselSlider.jpg";
import GlassMorphism from "../assets/portfolio/GlassMorphism UI.jpg"
import signUp from "../assets/portfolio/signUp.jpg"

const Portfolio = () => {
  const portfolios = [

    {
      id: 1,
      src: reactWeather,
      demolink: "https://weather-app-by-asim26k.netlify.app/",
      codelink: "https://github.com/AsimKachhap/weatherApp",
    },

    {
      id: 2,
      src: signUp,
      demolink: "https://signup-by-asim26k.netlify.app/",
      codelink: "https://github.com/AsimKachhap/SignUpFormValidation",
    },

    {
      id: 3,
      src: carouselSlider,
      demolink: "https://carousel-slider-by-asim26k.netlify.app/",
      codelink: "https://github.com/AsimKachhap/carousel-slider",
    },
    {
      id: 4,
      src: GlassMorphism,
      demolink: "https://glassmorphism-ui-by-asim26k.netlify.app/",
      codelink: "https://github.com/AsimKachhap/GlassmorphUI",
    },
  ];
    
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen py-2 sm:py-4 sm:min-h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demolink, codelink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center py-2">
                
                <a href={demolink} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                
                <a href={codelink} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;