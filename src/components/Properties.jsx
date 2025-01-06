import React from 'react';
import propertiesFirst from "../assets/images/properties/1.jpeg";
import propertiesSecond from "../assets/images/properties/2.jpeg";
import propertiesThird from "../assets/images/properties/3.jpeg";
import propertiesFour from "../assets/images/properties/4.jpeg";
import fireIcon from "../assets/images/icons/icon_fire.png";
import homeIcon from "../assets/images/icons/icon_home.png";
import priceIcon from "../assets/images/icons/icon_price.png";
import bathroomIcon from "../assets/images/icons/icon_bathroom.png";
import bedIcon from "../assets/images/icons/icon_bed.png";


const PropertyCard = ({ property }) => {
  const { 
    image, 
    badge, 
    badgeText,
    badgeColor, 
    price, 
    title, 
    address, 
    beds, 
    baths 
  } = property;

  const getBadgeColors = (color) => {
    const colors = {
      red: "text-red-500 bg-red-500",
      blue: "text-blue-500 bg-blue-500",
      green: "text-green-500 bg-green-500"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-[340px] h-[340px] rounded-[30px] object-cover"
        />
        <span className={`w-auto h-11 absolute bottom-4 left-4 bg-white ${getBadgeColors(badgeColor).split(' ')[0]} px-4 py-1 rounded-full text-sm font-poppins flex items-center gap-1`}>
          <img src={badge} alt="badge" className='w-5 h-5 object-contain'/>          
          <span className="font-poppins font-medium text-[16px] leading-[24px]">{badgeText}</span>               
        </span>
      </div>
      
      <div className="py-4">
        <div className="mb-4">
          <h3 className="font-poppins font-semibold text-[27.6px] leading-[41.4px] text-[#2B2B2B]">$ {price.toLocaleString()}</h3>
          <h4 className="w-[333px] font-poppins font-medium text-[19.4px] leading-[29.1px] text-[#2B2B2B] mt-2">{title}</h4>
          <p className="w-[330px] font-poppins font-normal text-[16px] leading-[26px] text-footer-text-gray mt-1">{address}</p>
        </div>
        
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <img src={bedIcon} alt="bedIcon" className='w-7 h-5 object-contain'/>                
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={bathroomIcon} alt="bathroomIcon" className='w-6 h-6 object-contain'/>                
            <span>{baths} Bath</span>
          </div>
        </div>
      </div>
    </div>
  );
};


const Properties = () => {
  
  const propertiesData = [
    {
      id: 1,
      image: propertiesFirst,
      badge: fireIcon,
      badgeText: "Popular",
      badgeColor: "red",
      price: 5970,
      title: "Tranquil Haven in the Woods",
      address: "103 Wright Court Burien, WA 98168",
      beds: 4,
      baths: 3
    },
    {
      id: 2,
      image: propertiesSecond,
      badge: homeIcon,
      badgeText: "New Listing",
      badgeColor: "blue",
      price: 1970,
      title: "Serene Retreat by the Lake",
      address: "1964 Jehovah Drive, VA 22408",
      beds: 3,
      baths: 2
    },
    {
      id: 3,
      image: propertiesThird,
      badge: priceIcon,
      badgeText: "Discounted Price",
      badgeColor: "#00CE3A",
      price: 3450,
      title: "Charming Cottage in the Meadow",
      address: "1508 Centennial Farm Road Harlan, 51537",
      beds: 4,
      baths: 4
    },
    {
      id: 4,
      image: propertiesFour,
      badge: fireIcon,
      badgeText: "Popular",
      badgeColor: "red",
      price: 2389,
      title: "Grand Estate on the Hilltop",
      address: "103 Wright CourtBurien, WA 98168",
      beds: 4,
      baths: 3
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 px-[95px]">
        <div>
          <span className="global-title">
            CHECKOUT OUR NEW
          </span>
          <h2 className="text-4xl lg:text-5xl font-poppins font-semibold mt-4 mb-6 leading-[65px]">
            Latest Listed Properties
          </h2>
          <p className="text-footer-text-gray font-poppins text-[16px] leading-[26px]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum,
            nec dignissim purus.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50">
            All
          </button>
          <button className="px-6 py-2 rounded-full bg-primary-color text-white hover:bg-purple-800">
            Sell
          </button>
          <button className="px-6 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50">
            Rent
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pl-[95px]">
        {propertiesData.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default Properties;