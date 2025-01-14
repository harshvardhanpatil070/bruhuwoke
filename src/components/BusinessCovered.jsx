import React from "react";
import visaImage from "../assets/images/visa.jpg"; // Import the image

const BusinessCovered = () => {
  const businesses = [
    { id: 1, name: "Business 1", logo: visaImage },
    { id: 2, name: "Business 2", logo: visaImage },
    { id: 3, name: "Business 3", logo: visaImage },
    { id: 4, name: "Business 4", logo: visaImage },
    { id: 5, name: "Business 5", logo: visaImage },
    { id: 6, name: "Business 6", logo: visaImage },
    { id: 7, name: "Business 7", logo: visaImage },
    { id: 8, name: "Business 8", logo: visaImage },
    { id: 9, name: "Business 9", logo: visaImage },
    { id: 10, name: "Business 10", logo: visaImage },
  ];

  // Duplicate businesses array to create a seamless scrolling effect
  const scrollingBusinesses = [...businesses, ...businesses];

  return (
    <div className="w-full bg-gray-100 py-8 overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        We've Got Your <span className="text-orange-500">Business</span> Covered
      </h2>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex items-center animate-scroll"
          style={{
            animation: "scroll 30s linear infinite", // Increased the duration to slow down the effect
          }}
        >
          {scrollingBusinesses.map((business, index) => (
            <div
              key={`${business.id}-${index}`}
              className="flex justify-center items-center w-[12rem] h-[5rem] mx-6 bg-white shadow-lg rounded-lg p-4"
              style={{ flexShrink: 0 }}
            >
              <img
                src={business.logo}
                alt={business.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: 200%; /* Ensures seamless loop */
        }
      `}</style>
    </div>
  );
};

export default BusinessCovered;