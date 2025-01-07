import React, { useState } from "react";
import search from "../../assets/images/icons/search-icon.png";
import setting from "../../assets/images/icons/icon_setting.png";

const SearchForm = () => {
  const [activeTab, setActiveTab] = useState("sale");

  return (
    <div className="md:w-[420px] md:h-[582px] w-[333px] h-[449px] mx-auto bg-white px-0  border-customGray rounded-[30px] shadow-search">

      {/* Tablar */}
      <div className="flex h-[76px] border-b border-customGray  px-6   border-gray-200">
        <button
          className={`flex-1 py-3 text-center font-medium  ${
            activeTab === "sale"
              ? "text-indigo-700 border-b-2 border-indigo-700 font-poppins font-medium leading-6 text-base"
              : "text-[#6b7280] border-indigo-700  font-poppins font-medium leading-6 text-base"
          }`}
          onClick={() => setActiveTab("sale")}
        >
          For Sale
        </button>
        <button
          className={`flex-1 py-3 text-center font-medium ${
            activeTab === "rent"
              ? "text-indigo-700 border-b-2 border-indigo-700 font-poppins font-medium leading-6 text-base"
              : "text-[#6b7280] border-indigo-700  font-poppins font-medium leading-6 text-base"
          }`}
          onClick={() => setActiveTab("rent")}
        >
          For Rent
        </button>
      </div>

      {/* Form */}
      <div className="text-[#6b7280] px-6 md:py-14 py-6">
        <div className="md:mb-8 mb-4">
          <input
            type="text"
            placeholder="New York, San Francisco, etc"
            className="w-full text-[#aaaaaa] bg-input-color p-3   rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
        <div className="relative w-full md:mb-8 mb-4">
          <select className="w-full text-[#aaaaaa] bg-input-color p-3 rounded-lg text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none">
            <option value="">Select Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
          </select>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="7"
            viewBox="0 0 14 7"
            fill="none"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          >
            <path
              d="M7.58521 6.57766C7.23581 6.82982 6.76419 6.82982 6.41479 6.57767L0.848983 2.56089C0.0621447 1.99304 0.46384 0.750001 1.43419 0.750001L12.5658 0.75C13.5362 0.75 13.9379 1.99303 13.151 2.56088L7.58521 6.57766Z"
              fill="#AAAAAA"
            />
          </svg>
        </div>
        <div className="relative w-full md:mb-8 mb-4">
          <div className="relative w-full">
            <select className="w-full text-[16px] text-[#aaaaaa] bg-input-color font-poppins  p-3 border-gray-300 rounded-lg text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none appearance-none leading-[24px]">
              <option value="">Select Rooms</option>
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="7"
              viewBox="0 0 14 7"
              fill="none"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
            >
              <path
                d="M7.58521 6.57766C7.23581 6.82982 6.76419 6.82982 6.41479 6.57767L0.848983 2.56089C0.0621447 1.99304 0.46384 0.750001 1.43419 0.750001L12.5658 0.75C13.5362 0.75 13.9379 1.99303 13.151 2.56088L7.58521 6.57766Z"
                fill="#AAAAAA"
              />
            </svg>
          </div>
        </div>

        <div className="text-primary-color text-sm cursor-pointer flex items-center gap-2 mb-16">
          <img src={setting} alt="setting Icon" className='w-3.5 h-3.5 object-contain'/>
          <span className="font-medium">Advance Search</span>
        </div>
        
        <button className="w-full bg-primary-color text-white py-3 rounded-[50px] flex items-center justify-center gap-2 font-medium hover:bg-indigo-800 transition ">
        <img src={search} alt="search Icon" className='w-6 h-6 object-contain'/>                
          <span className="material-icons">Search</span> 
        </button>
      </div>

    </div>
  );
};

export default SearchForm;
