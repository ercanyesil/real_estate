import React from 'react';
import house from "../assets/images/icons/footer/reshot-icon-house.png";
import mail from "../assets/images/icons/footer/icon_mail.png";
import phone from "../assets/images/icons/footer/icon_phone.png";
import facebook from "../assets/images/icons/footer/faceboobk-icon.png";
import linkedin from "../assets/images/icons/footer/icon_linkedinin.png";
import instagram from "../assets/images/icons/footer/instagram-icon.png";
import EmailInput from './EmailInput';

const Footer = () => {
  return (
    <footer className="bg-footer-color">
      
      {/* Main Footer Content */}
      <div className="container mx-auto md:px-40 max-md:px-4">

        {/* Mobile Layout - Shows only on mobile */}
        <div className="py-[55px] lg:hidden flex flex-col items-center text-center">
          <div className="flex flex-col justify-center items-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-[50px] h-[50px] bg-primary-color rounded-lg flex items-center justify-center">
              <img src={house} alt="House Icon" className='w-6 h-6 object-contain'/>
            </div>
              <span className="font-bold text-xl">Logo</span>
            </div>
            <p className="w-[234px] text-gray-600 text-base mb-4 text-footer-text-gray">
              Lorem ipsum has been the industry's standard dummy
            </p>
            <div className="flex flex-col items-center gap-2 text-gray-600 mb-6">
              <div className="flex justify-center items-center gap-2">
                <img src={phone} alt="Mail Icon" className='w-4 h-4 object-contain'/>
                <span className='text-footer-text-gray text-base'>+10123 45 67</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={mail} alt="Mail Icon" className='w-6 h-6 object-contain'/>
                <span className="text-footer-text-gray text-base">mail@mail.com</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold mb-3">Subscribe to our Newsletter!</h3>

              <EmailInput />

            </div>

            <div>
              <p className="font-bold mb-3">Follow Us on</p>
              <div className="flex justify-center items-center gap-4">
                <a href="#">
                  <img src={linkedin} alt="linkedin Icon" className='w-6 h-6 object-contain'/>                
                </a>
                <a href="#">
                  <img src={facebook} alt="facebook Icon" className='w-6 h-6 object-contain'/>                
                </a>
                <a href="#">
                  <img src={instagram} alt="instagram Icon" className='w-6 h-6 object-contain'/>                
                </a>
              </div>
            </div>


          </div>
        </div>

        {/* Desktop Layout - Hidden on mobile */}
        <div className="py-[70px] hidden lg:grid grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
            <div className="w-[50px] h-[50px] bg-primary-color rounded-full flex items-center justify-center">
              <img src={house} alt="House Icon" className='w-6 h-6 object-contain'/>
            </div>
              <span className="font-bold text-xl">Rezilla</span>
            </div>
            <p className="text-footer-text-link font-poppins font-medium text-base">
              Lorem ipsum has been the industry's standard dummy text
            </p>
            <div className="flex items-center gap-2 text-footer-text-link mt-[45px]">
              <img src={phone} alt="Mail Icon" className='w-4 h-4 object-contain'/>
              <span>+10123 45 67</span>
            </div>
            <div className="flex items-center gap-2 text-footer-text-link">
              <img src={mail} alt="Mail Icon" className='w-6 h-6 object-contain'/>
              <span>mail@mail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-poppins text-base text-footer-text-link">
              <li><a href="#" className="hover:text-indigo-700">Home</a></li>
              <li><a href="#" className="hover:text-indigo-700">About</a></li>
              <li><a href="#" className="hover:text-indigo-700">Listings</a></li>
              <li><a href="#" className="hover:text-indigo-700">Services</a></li>
              <li><a href="#" className="hover:text-indigo-700">Blogs</a></li>
              <li><a href="#" className="hover:text-indigo-700">Become a Agent</a></li>
            </ul>
          </div>

          {/* Discovery */}
          <div>
            <h3 className="font-bold mb-4">Discovery</h3>
            <ul className="space-y-3 text-footer-text-link">
              <li><a href="#" className="hover:text-indigo-700">Canada</a></li>
              <li><a href="#" className="hover:text-indigo-700">United States</a></li>
              <li><a href="#" className="hover:text-indigo-700">Germany</a></li>
              <li><a href="#" className="hover:text-indigo-700">Africa</a></li>
              <li><a href="#" className="hover:text-indigo-700">India</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Subscribe to our Newsletter!</h3>
            <EmailInput width="333px" height="60px" buttonSize="40px" />
            <div className="mt-6">
              <p className="font-bold mb-3">Follow Us on</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-indigo-700">
                  <img src={linkedin} alt="linkedin Icon" className='w-6 h-6 object-contain'/>                
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-700">
                  <img src={facebook} alt="facebook Icon" className='w-6 h-6 object-contain'/>                
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-700">
                  <img src={instagram} alt="instagram Icon" className='w-6 h-6 object-contain'/>                
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-black max-md:hidden md:px-40 max-md:px-[30px]">
        <div className="container mx-auto py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
            <p>© Company - All rights reserved</p>
            <div className="flex gap-6 sm:hidden md:flex">
              <a href="#" className="hover:text-white">Terms and Conditions</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="md:hidden flex justify-center items-center border-t border-gray-200 bg-black h-10">
        <p className=" text-sm text-white">© Company - All rights reserved</p>
      </div>
      
    </footer>
  );
};

export default Footer;