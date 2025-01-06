import React from 'react';
import aboutFirst from "../assets/images/about-us/1.jpeg";
import aboutSecond from "../assets/images/about-us/2.jpeg";
import aboutThird from "../assets/images/about-us/3.jpeg";
import aboutIconHome from "../assets/images/icons/icon_about.png";
import aboutIconUser from "../assets/images/icons/icon_user_about.png";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 relative">
      <div className="absolute -top-8 left-10 w-24 h-24 rounded-full bg-gradient-to-b from-gradient-start to-gradient-end"></div>

      <div className="container mx-auto px-[160px]">
        {/* Sol Taraf - Metin İçeriği */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <span className="global-title  tracking-wider">
              WHO ARE WE
            </span>
            <h2 className="global-text text-[#2B2B2B] font-poppins font-semibold mt-4 mb-6 leading-[65px]">
              Assisting individuals in<br />
              locating the appropriate<br />
              real estate.
            </h2>
            <p className="global-subtitle mb-12">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it
            </p>

            {/* Özellik Kartları */}
            <div className="space-y-4">
              <div className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                <div className="mr-10">
                  <img src={aboutIconHome} alt="linkedin Icon" className='w-10 h-10 object-contain'/>                
                </div>
                <div>
                  <h3 className="global-title">Lorem ipsum has been the</h3>
                  <p className="global-subtitle">when an unknown printer took a galley</p>
                </div>
              </div>

              <div className="flex items-center bg-white rounded-xl p-4 shadow-sm">
                <div className="mr-10">
                  <img src={aboutIconUser} alt="aboutIconUser" className='w-10 h-11 object-contain'/>                
                </div>
                <div>
                  <div className="global-title">Lorem ipsum has been the</div>
                  <p className="global-subtitle">when an unknown printer took a galley</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Görsel Grid */}
          <div className="container mx-auto p-4">

            <div className="flex justify-center items-center gap-4">
              {/* Left tall image */}
              <div className='pt-[20px]'>
                <img 
                  src={aboutFirst}
                  alt="Modern villa with pool"
                  className="w-[280px] h-[500px] lg:w-[280px] lg:h-[500px] md:w-[220px] md:h-[400px] sm:w-[170px] sm:h-[260px] object-cover rounded-3xl"
                />
              </div>

              {/* Right column with stacked images */}
              <div className="flex flex-col gap-4 pb-[100px]">
                {/* Top image */}
                <div>
                  <img
                    src={aboutSecond}
                    alt="Cozy bedroom"
                    className="w-[277px] h-[280px] lg:w-[277px] lg:h-[280px] md:w-[220px] md:h-[220px] sm:w-[143px] sm:h-[141px] object-cover rounded-3xl"
                  />
                </div>
                
                {/* Bottom image */}
                <div>
                  <img
                    src={aboutThird}
                    alt="Modern living room"
                    className="w-[277px] h-[180px] lg:w-[277px] lg:h-[180px] md:w-[220px] md:h-[140px] sm:w-[143px] sm:h-[100px] object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>

          </div>




        </div>
      </div>
    </section>
  );
};

export default AboutUs;