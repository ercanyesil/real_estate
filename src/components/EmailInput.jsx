import React from "react";
import arrow from "../assets/images/icons/footer/arrow.png";

const EmailInput = ({ width = "333px", height = "60px", buttonSize = "50px" }) => {
  return (
    <div
        className="relative"
        style={{ width: width, height: height }}
        >
        <input
            type="email"
            placeholder="Email Address"
            className="w-full h-full px-4 py-2 pr-[70px] rounded-4xl shadow-email-input focus:outline-none focus:ring-2 focus:ring-indigo-700"
        />
        <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center bg-indigo-700 text-white p-2 rounded-full"
            style={{ width: buttonSize, height: buttonSize }}
        >
            <img src={arrow} alt="arrow" className="w-4 h-4" />
        </button>
    </div>
  );
};


export default EmailInput;
