import React, { useState } from 'react';
import blogsFirst from "../assets/images/blogs/1.jpeg";
import blogsSecond from "../assets/images/blogs/2.jpeg";
import blogsThird from "../assets/images/blogs/3.jpeg";
import next from "../assets/images/icons/blogs_next.png";
import prev from "../assets/images/icons/blogs_prev.png";

const BlogCard = ({ date, day, image, title, description }) => (
  <div className="overflow-hidden">
    <div className="relative">
      <img 
        src={image} 
        alt={title} 
        className="w-[340px] h-[240px] rounded-[30px] object-cover"
      />
      <div className="w-[50px] h-[50px] absolute top-0 left-12 bg-white rounded-b-lg text-center">
        <div className="font-poppins font-medium text-[19.4px] leading-[29.1px] text-[#2B2B2B]">{date}</div>
        <div className="font-poppins font-normal text-[16px] leading-[26px] text-footer-text-gray">{day}</div>
      </div>
    </div>
    <div className="py-6">
      <h3 className="font-poppins font-medium text-[27.6px] leading-[41.4px] text-white mb-3">{title}</h3>
      <p className="font-poppins font-normal text-[16px] leading-[26px] text-[#D4D4D4]">{description}</p>
    </div>
  </div>
);

const Blogs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const blogData = [
    {
      id: 1,
      date: "28",
      day: "Tue",
      image: blogsFirst,
      title: "Top 10 Home Buying Mistakes to Avoid",
      description: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum"
    },
    {
      id: 2,
      date: "08",
      day: "Mon",
      image: blogsSecond,
      title: "How to Stage Your Home for a Quick Sale",
      description: "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc."
    },
    {
      id: 3,
      date: "26",
      day: "Wed",
      image: blogsThird,
      title: "5 Tips for First-Time Home Sellers",
      description: "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + blogData.length) % blogData.length);
  };

  return (
    <section className="bg-primary-color py-24 px-[160px]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-poppins font-medium text-[19.4px] leading-[29.1px] text-white">
            WHAT'S TRENDING
          </span>
          <h2 className="font-poppins font-semibold text-[39.8px] leading-[47px] text-white mt-2">
            Latest Blogs & Posts
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.map(blog => (
            <BlogCard
              key={blog.id}
              date={blog.date}
              day={blog.day}
              image={blog.image}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>

          {/* Navigation Controls */}
          <div className='flex justify-evenly items-center'>

            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <img src={prev} alt="prev" className='w-12 h-12 object-contain'/>                
            </button>

            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <img src={next} alt="next" className='w-12 h-12 object-contain'/>
            </button>

          </div>

        
        <div className="flex justify-center items-center pt-20">


          {/* Pagination Dots */}
          <div className="flex gap-14">
            {blogData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-24 h-1 rounded-full transition-colors ${
                  currentSlide === idx ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>



        </div>
      </div>
    </section>
  );
};

export default Blogs;