import React, { useState } from "react";
import sliderİmage from "../../assets/images/about-us/slider-image-1.jpeg";
import image2 from "../../assets/images/about-us/2.jpeg";
import image3 from "../../assets/images/about-us/3.jpeg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [sliderİmage, image2, image3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* Left Column */}
      <div>
        <span className="global-title">REAL ESTATE</span>
        <h2 className="text-4xl lg:text-5xl font-poppins font-semibold mt-4 mb-6 leading-[65px]">
          Find a perfect
          <br />
          home you love..!
        </h2>
        <p className="global-subtitle">
          Lorem ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley
        </p>
      </div>

      <div className="relative">
        <div className="absolute -top-6 -right-10 w-16 h-16 rounded-full bg-gradient-to-b from-gradient-start to-gradient-end"></div>
      </div>

      {/* Custom Carousel */}
      <div className="relative rounded-xl overflow-hidden mt-5">

        <div className="relative h-[300px] w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-300 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-[-20px] z-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            {/* <ChevronLeft className="w-6 h-6 text-gray-800" /> */}
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-20px] z-10 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            {/* <ChevronRight className="w-6 h-6 text-gray-800" /> */}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSlider;
