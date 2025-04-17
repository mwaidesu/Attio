import React from "react";
import CustomHeader from "../common/CustomHeader";
import ReviewCard from "../cards/ReviewCard";

function CRMSection() {
  const cardData = {
    avatarUrl: "/images/degrasse.png",
    review:
      "“My team loves Homyze's reporting system because it's so dynamic. We can splice our data in so many different ways and combinations.”",
    name: "DeGresse Schrader",
    position: "Chief of Staff, DreamHome",
  };
  return (
    <section>
      <div>
        <CustomHeader
          title="Real Estate Management at your fingertips."
          description="Tweak anything and everything to ensure Homyze fits your business, not the other way around."
        />
      </div>



      <div className="w-full flex justify-center my-16">
        <div className="p-4 rounded-2xl shadow-md border border-gray-200 bg-white w-[calc(100vw-1.5rem)] md:w-[calc(100vw-8rem)] transition-all hover:shadow-xl">
          <img
            src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg"
            alt="CRM Interface"
            className="w-full h-auto rounded-xl object-cover filter grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
      </div>

      <div>
        <ReviewCard {...cardData} />
      </div>
    </section>
  );
}

export default CRMSection;
