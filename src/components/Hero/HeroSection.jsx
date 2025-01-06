import React from "react";
import HeroSlider from "./HeroSlider";
import SearchForm from "./SearchForm";
import avatar1 from "../../assets/images/avatars/1.jpeg";
import avatar2 from "../../assets/images/avatars/2.jpeg";
import avatar3 from "../../assets/images/avatars/3.jpeg";
import avatar4 from "../../assets/images/avatars/4.jpeg";
import avatar5 from "../../assets/images/avatars/5.jpeg";
import avatar6 from "../../assets/images/avatars/6.jpeg";

const HeroSection = () => {

  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

  return (
    <div className="relative">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          borderRadius: "0 0 800px 800px",
          zIndex: -1,
          background:
            "linear-gradient(180deg, rgba(76, 201, 240, 0) 0%, rgba(67, 97, 238, 0.3) 100%)",
        }}
      />

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-[160px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroSlider />

          <SearchForm />
        </div>
          <div className="flex items-center justify-center gap-6 mt-8">

            {/* Customer Stats Card */}
            <div className="w-[360px] h-[100px] bg-white rounded-[50px] shadow-sm p-4">
              <div className="flex justify-between items-center">

                <div className="flex -space-x-2 pl-8">
                  {/* Mapped avatars */}
                  {avatars.map((avatar, i) => (
                    <img
                      key={i}
                      src={avatar}
                      alt={`Customer ${i + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  {/* Last avatar with plus sign */}
                  <div className="w-8 h-8 rounded-full bg-black/60 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-lg font-medium">+</span>
                  </div>
                </div>
                <div className="w-[130px] font-poppins font-medium text-[19.4px] leading-[29.1px] text-[#2B2B2B]">
                  72k+ Happy Customers
                </div>

              </div>

            </div>

            {/* Listings Stats Card */}
            <div className="w-[320px] h-[100px] flex justify-center items-center bg-white rounded-[50px] shadow-sm p-4">
              <div className="flex items-center">
                {/* Icon placeholder */}
                  <img
                    src={avatar6}
                    alt="avatar6"
                    className="w-16 h-16 rounded-full border-2 border-white object-cover"
                  />                  
                <div className="w-[190px] pl-4 font-poppins font-medium text-[19.4px] leading-[29.1px] text-[#2B2B2B]">
                  200+ New Listings Everyday!
                </div>
              </div>
            </div>
          </div>
        
      </section>
    </div>
  );
};

export default HeroSection;
