import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function MultiPlayerDesignSection() {
  const cardData = {
    avatarUrl: "/images/alon.png",
    review:
      "“Homyze has played a crucial role in scaling, building out and evolving our go-to-market model. It allows my team to easily stay on top of everything.”",
    name: "Alon Bartur",
    position: "Co-founder & CTO, Tripply",
  };
  return (
    <section>
      <div>
        <CustomHeader
          title="Designed for all stakeholders."
          description="For landlords and tenants to manage property, land, and communicate effortlessly."
        />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-7 items-stretch justify-center my-16 bg-white px-4">
        {/* Left - 2/3 width */}
        <div className="p-4 rounded-2xl shadow-md border border-gray-200 bg-white w-full md:w-2/3 transition-all hover:shadow-xl">
          <img
            src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g"
            alt="Large CRM Image"
            className="w-full h-full rounded-xl object-cover filter grayscale hover:grayscale-0 transition duration-500"
          />
        </div>

        {/* Right - 1/3 width */}
        <div className="p-4 rounded-2xl shadow-md border border-gray-200 bg-white w-full md:w-1/3 transition-all hover:shadow-xl">
          <img
            src="https://images.pexels.com/photos/11021173/pexels-photo-11021173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g"
            alt="Small CRM Image"
            className="w-full h-full rounded-xl object-cover filter grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
      </div>



      <div>
        <ReviewCard {...cardData} />
      </div>
    </section>
  );
}

export default MultiPlayerDesignSection;
