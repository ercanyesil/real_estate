import React, { useState } from 'react';
import next from "../assets/images/icons/testimonial_next.png";
import prev from "../assets/images/icons/testimonial_prev.png";
import start from "../assets/images/icons/icon_star.png"

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
            author: 'Barbara D. Smith',
            image: 'https://randomuser.me/api/portraits/women/79.jpg',
            rating: 4,
        },
        {
            id: 2,
            text: "This is another testimonial, showing how great our product is and how happy our customers are. This is the second card, and we are showing that we can handle multiple testimonials",
            author: 'John Doe',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 5,
        },
        {
            id: 3,
            text: "And here we have the third card. A testimonial can be really any text, and it can also be about anything, as you can see here. I'm just testing if our carousel is working",
            author: 'Jane Doe',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 3,
        }
    ];

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const handlePrevCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };


    const handleNextCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };


    const currentTestimonial = testimonials[currentCardIndex];


    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
              <img 
                key={i}
                src={start}
                alt="star"
                className={`w-[14px] h-[14px] inline`} 
                style={{filter: `${i < rating ? 'brightness(1)' : 'brightness(0) grayscale(1) contrast(0.8) '}`,
                 opacity: `${i < rating ? '1' : '0.3'}`, 
                 color: `${i < rating ? '#FFC700' : '#D4D4D4'}`}}
              />
            );
        }
        return stars;
    };

    const renderIndicators = () => {
        return testimonials.map((_, index) => (
          <button
            key={index}
            className={`block w-1 h-8 rounded-full my-1 transition-colors duration-200
            ${index === currentCardIndex ? 'bg-[#808080]' : 'bg-[#AAAAAA] hover:bg-black'}
            `}
            onClick={() => setCurrentCardIndex(index)}
          />
        ));
      };

      const cardStyle = {
        height: '358px',
        borderRadius: "30px",
        padding: '50px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      };

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between md:px-40 max-md:px-[30px]">
                {/* Left Side: Heading and Description */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <span className="global-title tracking-wider">
                        TESTIMONIALS
                    </span>
                    <h2 className="global-text">
                        Look What Our <br />
                        Customers Say!
                    </h2>
                    <p className="global-subtitle mb-6">
                        Fusce venenatis tellus a felis scelerisque, non <br />
                        pulvinar est pellentesque.
                    </p>
                    {/* Navigation Buttons */}
                    <div className="flex space-x-2 max-md:hidden">
                        <button
                            className="bg-white rounded-full p-2 hover:bg-blue-100 focus:outline-none"
                            onClick={handlePrevCard}
                        >
                            <img src={prev} alt="prev" className='w-12 h-12 object-contain'/>                
                        </button>
                        <button
                            className="bg-white rounded-full p-2 hover:bg-blue-100 focus:outline-none"
                            onClick={handleNextCard}
                        >
                            <img src={next} alt="next" className='w-12 h-12 object-contain'/>
                        </button>
                    </div>
                </div>


                {/* Right Side: Testimonial Card & Indicators */}
               <div className="relative flex">
                    <div className="absolute -top-8 md:-left-4 max-md:-right-3 w-16 h-16 rounded-full bg-gradient-to-b from-gradient-start to-gradient-end"></div>
                    <div className="relative bg-white z-10 max-md:w-[333px] w-[500px]" style={cardStyle}>
                       {/* Quote Marks */}
                        <div className="text-yellow-400 text-2xl mb-2 max-md:mb-1">
                            <svg width="60" height="39" viewBox="0 0 60 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.9606 0.989746L0 38.2529H21.7241L30.1478 0.989746H15.9606ZM45.8128 0.989746L29.8522 38.2529H51.5764L60 0.989746H45.8128Z" fill="#FFC700" fill-opacity="0.4"/>
                            </svg>
                        </div>
                         {/* Testimonial Text */}
                       <p className="max-md:text-[16px] max-md:mb-1 text-[19.4px] text-gray-700 mb-8 font-poppins font-medium leading-[29.1px] text-left underline-from-font decoration-skip-ink-none">{currentTestimonial.text}</p>

                        <svg className='max-md:w-[250px]' width="400" height="2" viewBox="0 0 400 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1.48975" x2="400" y2="1.48975" stroke="#D4D4D4"/>
                        </svg>

                        


                       {/* Author & Rating */}
                       <div className="flex flex-wrap items-center justify-between pt-8 max-md:pt-3">
                           <div className="flex items-center">
                            <img
                                src={currentTestimonial.image}
                                alt={currentTestimonial.author}
                                className="w-10 h-10 rounded-full mr-3"
                             />
                             <span className="font-semibold">{currentTestimonial.author}</span>
                           </div>
                          <div className="text-yellow-400 pl-14">
                              {renderStars(currentTestimonial.rating)}
                          </div>
                       </div>
                    </div>
                     {/* Indicators */}
                     <div className="flex flex-col ml-4 justify-center">
                        {renderIndicators()}
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;