import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function DataModellingSection() {
  const cardData = {
    avatarUrl: "/images/filip.png",
    review:
      "“Homyze is an incredibly flexible product, you can build anything on it. It gives you the tools you need to build a CRM that's exactly right to your business, your data, and your processes.",
    name: "Filip Mark",
    position: "Chief of Staff, Nyumbani",
  };
  return (
    <section>
      <div>
        <CustomHeader
          title="Management modelled around your data and workflows."
          description="Real Estate Management should go beyond deals. Homyze is built for all property management process."
        />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-7 items-stretch justify-center my-16 bg-white px-4">
         {/* Right - 1/3 width */}
         <div className="p-4 rounded-2xl shadow-md border border-gray-200 bg-white w-full md:w-1/3 transition-all hover:shadow-xl">
          <img
            src="https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Small CRM Image"
            className="w-full h-full rounded-xl object-cover filter grayscale hover:grayscale-0 transition duration-500"
          />
        </div>

        {/* Left - 2/3 width */}
        <div className="p-4 rounded-2xl shadow-md border border-gray-200 bg-white w-full md:w-2/3 transition-all hover:shadow-xl">
          <img
            src="https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg"
            alt="Large CRM Image"
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

export default DataModellingSection;
