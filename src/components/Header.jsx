import React, { useState } from 'react';
import house from "../assets/images/icons/footer/reshot-icon-house.png";
import pin from "../assets/images/icons/header/icon_pin_header.png";
import phone from "../assets/images/icons/header/icon_header_phone.png";
import mail from "../assets/images/icons/header/icon_mail_header.png";
import userIcon from "../assets/images/icons/icon_user_circle.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white">
      {/* Üst Bar */}
      <div className="h-[40px] bg-primary-color text-white py-3 pl-[100px] pr-[134px] hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img src={pin} alt="pin" className='w-3 h-4 object-contain'/> 
            <div className='font-poppins font-normal text-[13.3px] leading-[22px] text-white pl-2'>Lorem ipsum has been the industry's standard dummy</div>               
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex justify-center items-center">
              <img src={phone} alt="phone" className='w-4 h-4 object-contain'/> 
              <div className='pl-2 font-poppsins leading-[22px] text-[13.3px] text-right'>+0123 45 67</div>
            </div>
            <div className="flex justify-center items-center">
              <img src={mail} alt="mail" className='w-4 h-3 object-contain'/> 
              <div className='pl-2 font-poppsins leading-[22px] text-[13.3px] text-right'>mail@mail.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ana Navigasyon */}
      <nav className="container mx-auto flex justify-between items-center md:px-[100px] md:py-[22px]">
        {/* Mobil Logo */}
        <div className="flex items-center space-x-2 md:hidden">
          <div className="bg-primary p-2 rounded-full">
          <div className="w-[50px] h-[50px] bg-primary-color rounded-full flex items-center justify-center">
              <img src={house} alt="Logo" className="w-6 h-6 object-contain"></img>
            </div>
          </div>
          <span className="font-bold text-xl">Logo</span>
        </div>

        {/* Navigasyon Linkleri (Web) */}
        <div className="space-x-9  hidden md:flex items-center font-poppins ">
          <a href="https://kariyer.baykartech.com/tr/" className="font-poppins font-medium bg-nav-active-color  text-textPrimary px-[13px] py-2  h-[40px] rounded-[30px]">Home</a>
          <a href="https://kariyer.baykartech.com/tr/" className="font-poppins font-medium text-textPrimary rounded-[30px]">About</a>
          <a href="https://kariyer.baykartech.com/tr/" className="font-poppins font-medium text-textPrimary rounded-[30px]">Listings</a>
          <a href="https://kariyer.baykartech.com/tr/" className="font-poppins font-medium text-textPrimary rounded-[30px]">Services</a>
          <a href="https://kariyer.baykartech.com/tr/" className="font-poppins font-medium text-textPrimary rounded-[30px]">Blogs</a>
        </div>
        {/* Web Logo */}
        <div className="items-center space-x-2 absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
          <div className="bg-primary p-2 rounded-full">
            <div className="w-[50px] h-[50px] bg-primary-color rounded-full flex items-center justify-center">
              <img src={house} alt="Logo" className="w-6 h-6 object-contain"></img>
            </div>
          </div>
          <span className=" text-xl font-semibold font-poppins ">Logo</span>
        </div>

        {/* Sağ Taraf Butonlar */}
        <div className="flex items-center space-x-4">
          {/* Login/Register (Web) */}
          <div className="hidden md:flex items-center text-textPrimary">
           <img src={house} alt="Logo" className="w-6 h-6 text-black"></img>

            <button>
              <div className='flex justify-center items-center'>
                <img src={userIcon} alt="userIcon" className='w-7 h-5 object-contain'/>                
                <div className="pl-2 font-poppins font-medium text-[16px] leading-[24px] text-[#2B2B2B]">Login/Register</div>
              </div>
            </button>
          </div>

          {/* Login/Register (Mobil) */}
          <div className="md:hidden">

          </div>
          {/* Add Listing Butonu (Web) */}
          <button className="bg-primary-color text-white font-poppins  rounded-4xl  py-3 px-6 hidden md:flex items-center">
            <img src={house} alt="Logo" className="w-5 h-5 text-black"/>
            <div className="pl-2 font-poppins font-medium text-[16px] leading-[24px]">Add Listing</div>
          </button>

          {/* Add Listing Butonu (Mobil) */}
          <button className="md:hidden bg-primary text-white font-poppins  rounded-md py-2 px-4">

          </button>

          {/* Hamburger Menü Butonu (Mobil) */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
             {isMobileMenuOpen ? (
                 <span className="text-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
                  </svg>
                 </span>
             ) : (
                 <span className="text-2xl">
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 0H0V2.18182H24V0Z" fill="#0B090A"/>
                    <path d="M24 9.81818H0V12H24V9.81818Z" fill="#0B090A"/>
                    <path d="M24 19.6364H0V21.8182H24V19.6364Z" fill="#0B090A"/>
                  </svg>
                 </span>
             )}
          </button>
        </div>
      </nav>

      {/* Hamburger Menü (Mobil) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-20 left-0 w-full h-full z-10 shadow-[4px_10px_30px_0px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col justify-center items-center pt-14 space-y-10">
            <a href="https://kariyer.baykartech.com/tr/" className="block py-2 px-4 font-extrabold hover:bg-primary-color font-poppins text-black">Home</a>
            <a href="https://kariyer.baykartech.com/tr/" className="block py-2 px-4 font-extrabold hover:bg-primary-color font-poppins text-black">About</a>
            <a href="https://kariyer.baykartech.com/tr/" className="block py-2 px-4 font-extrabold hover:bg-primary-color font-poppins text-black">Listings</a>
            <a href="https://kariyer.baykartech.com/tr/" className="block py-2 px-4 font-extrabold hover:bg-primary-color font-poppins text-black">Services</a>
            <a href="https://kariyer.baykartech.com/tr/" className="block py-2 px-4 font-extrabold hover:bg-primary-color font-poppins text-black">Blogs</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;