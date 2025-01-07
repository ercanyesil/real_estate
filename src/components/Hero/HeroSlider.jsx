import React, { useState } from "react";
import sliderİmage from "../../assets/images/about-us/slider-image-1.jpeg";
import image2 from "../../assets/images/about-us/2.jpeg";
import image3 from "../../assets/images/about-us/3.jpeg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [sliderİmage, image2, image3, image2];

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
        <div className="absolute top-3 md:-top-6 right-10 md:-right-10 w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-b from-gradient-start to-gradient-end"></div>
      </div>

      {/* Custom Carousel */}
      <div className="relative rounded-xl mt-10 md:mt-5">

        <div className="relative h-[210px] md:h-[300px] w-full">
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
                className="w-[333px] h-[200px] md:w-full md:h-full object-cover rounded-xl"
              />
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-[-20px] z-10 top-24 md:top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.85709 1.85714L2.12845 7.58578C1.3474 8.36683 1.3474 9.63316 2.12845 10.4142L7.85709 16.1429" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-[-20px] z-10 top-24 md:top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.57138 16.1429L7.30002 10.4142C8.08107 9.63316 8.08107 8.36683 7.30002 7.58579L1.57138 1.85714" stroke="#AAAAAA" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-5 md:gap-10 pt-0 md:pt-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-[57.41px] md:w-[100px] h-1 rounded-full transition-colors ${
              currentSlide === index ? 'bg-gradient-start' : 'bg-white'
            }`}
          />
        ))}
      </div>
      
    </div>
  );
};

export default HeroSlider;
