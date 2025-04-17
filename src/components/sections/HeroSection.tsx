import React from "react";
import HeroHeaderSection from "./HeroHeaderSection";
import MainButton from "../common/MainButton";
import { cn } from "@/lib/utils";
import { gilroyBold } from "@/lib/utils";


function HeroSection() {
  return (
    <section>
      <HeroHeaderSection />
      <div>
        <div
          className={cn(
            gilroyBold.className,
            "text-4xl md:text-[92px] text-center text-primary md:leading-[5.5rem] my-8"
          )}
        >
          Simplifying <br />  Property Management
        </div>

        <p className="mb-8 text-[22px] text-center text-[#31373D]">
          A seamless platform that simplifies communication, listings, and property management for Tenants, Landlords and Agents.
        </p>

        <div className="flex gap-[12px] justify-center">
          <MainButton
            text="Start for free"
            size="small"
            className="border-none rounded-[12px]"
          />
          <MainButton
            text="Talk to sales"
            size="small"
            className="rounded-[12px] border-[1px] border-[#EDEEF0] bg-white hover:bg-white text-[#31373D]"
          />
        </div>

        <div className="flex w-full justify-center mt-10">
          <img
            src="https://images.pexels.com/photos/7601163/pexels-photo-7601163.jpeg"
            alt="Paved Walkway on Lawn"
            className="w-full max-w-5xl h-auto rounded-xl object-cover filter grayscale hover:grayscale-0 transition duration-500"
          />
        </div>


      </div>
    </section>
  );
}

export default HeroSection;
