import React from "react";
import CustomStyledHeader from "../common/CustomStyledHeader";
import MainButton from "../common/MainButton";
import TweetCard from "../cards/TweetCard";

function LovedByBuildersSection() {
  const tweets = [
    {
      imageUrl: "/images/a_1.png",
      reviewerName: "Sebastiaan Debrouwere",
      reviewerTag: "@iamsebdeb",
      review:
        "We use Homyze on a daily basis for several internal processes, and I cannot rave enough about them. Incredible flexibility and features combined with super intuitive UI",
      timestamp: "10:01 PM - Apr 7, 2022",
    },

    {
      imageUrl: "/images/a_2.png",
      reviewerName: "Alon",
      reviewerTag: "@alon",
      review:
        "As an early stage startup I'm really loving using Homyze - great balance of flexibility and prescriptiveness",
      timestamp: "6:57 PM - Dec 1, 2022",
    },

    {
      imageUrl: "/images/a_3.png",
      reviewerName: "Alexandra Smith",
      reviewerTag: "@smith_alexandra",
      review:
        "We use  Homyze for sales, fundraising, and recruiting. It's awesome",
      timestamp: "1:32 PM - Jan 4, 2023",
    },

    {
      imageUrl: "/images/a_4.png",
      reviewerName: "Khrisna",
      reviewerTag: "@ntkris",
      review:
        "Holy shit Homyze is beautiful 😍  Sleek and simple, just what I need",
      timestamp: "10:22 PM - Mar 3, 2023",
    },

    {
      imageUrl: "/images/a_5.png",
      reviewerName: "Villa Gouse",
      reviewerTag: "@villa_gouse",
      review:
        " I am a huge fan of Homyze - their product is rock-solid, customer support is AAA, and it is *very* flexible and simple.",
      timestamp: "10:22 PM - Mar 3, 2023",
    },
    {
      imageUrl: "/images/a_6.png",
      reviewerName: "Damian",
      reviewerTag: "@damian09",
      review:
        "I've been using Homyze to track applicants, manage my deal pipeline and manage the associated tasks. The use-cases are unlimited.",
      timestamp: "10:22 PM - Mar 3, 2023",
    },
  ];
  return (
    <section className="relative bg-[#232529] px-4 md:px-[94px] py-[116px]">
      <div>
        <CustomStyledHeader
          titleColored="Loved by"
          titleUnColored="Builders"
          description="Homyze is the best property management tool for everyone who values collaboration."
        />

        <MainButton
          text="More customer stories"
          size="small"
          className="border border-[#31373D] text-[#EDEEF0] rounded-[12px] bg-transparent mt-[32px]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[64px]">
        {tweets.map((item, index) => (
          <TweetCard {...item} key={index} />
        ))}
      </div>

      <div className=" hidden lg:block absolute bottom-2 left-0 w-full">
        <img
          src="/images/fade_gradient.png"
          alt="gradient"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default LovedByBuildersSection;
