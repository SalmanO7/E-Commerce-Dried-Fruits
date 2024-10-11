import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="container pt-8  py-10">
      <div className=" grid xl:grid-cols-3 xl:grid-rows-2 gap-5">
        <div className="relative  xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="../../assets/hero__1.jpg"
            alt="heroimg"
          />

          <div className="absolute max-w-[400px] left-4 sm:left-16 top-[50%] -translate-y-[50%] pl-3 sm:pl-0 space-y-3 sm:text-left">
            <p className="text-lg sm:text-xl hidden sm:block">
              100% Original Dry Fruits
            </p>
            <h2 className="text-[24px] sm:text-4xl md:text-5xl font-bold">
              Dried Fruits Best Quality
            </h2>
            <p className="text-gray-600 text-lg pt-2 sm:pt-7">Starting At</p>
            <div className="font-medium text-red-500 sm:text-4xl sm:pb-4 text-2xl">
              $20.99
            </div>
            <div className="mt-4">
              <button className="text-white bg-accent hover:bg-accentDark justify-center rounded-full w-fit flex items-center gap-2 py-2 px-4 sm:px-6 text-[12px] sm:text-[14px]">
                Shop Now <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>

        <div className="card relative h-[65%]   xl:h-auto">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="../../assets/hero__2.jpg"
            alt="heroimg"
          />
          <div className="absolute max-w-[400px]  pl-3 sm:pl-0 left-4 sm:left-16 top-[50%] -translate-y-[50%] space-y-2 sm:text-left">
            <h2 className="text-xl sm:text-3xl font-bold">Yummy Pizza</h2>
            <p className="text-gray-600 text-lg md:pt-1 lg:pt-2">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl">
              $24
            </div>
            <div className="bg-accent hover:bg-accentDark text-white justify-center rounded-full w-fit flex items-center gap-2 px-4 py-2 text-[12px] sm:text-[14px] cursor-pointer">
              Shop Now <FaArrowRightLong />
            </div>
          </div>
        </div>
        <div className="card relative h-[65%]   xl:h-auto">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="../../assets/hero__3.jpg"
            alt="heroimg"
          />
          <div className="absolute max-w-[400px]  pl-3 sm:pl-0 left-4 sm:left-16 top-[50%] -translate-y-[50%] space-y-2 sm:text-left">
            <h2 className="text-xl sm:text-3xl font-bold">French Fries</h2>
            <p className="text-gray-600 text-lg md:pt-1 lg:pt-2">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl">
              $10
            </div>
            <div className="bg-accent hover:bg-accentDark text-white justify-center rounded-full w-fit flex items-center gap-2 px-4 py-2 text-[12px] sm:text-[14px] cursor-pointer">
              Shop Now <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
