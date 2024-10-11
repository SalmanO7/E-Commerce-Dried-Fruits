import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const NewsLetter = () => {
  return (
    <div className="bg-accent mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <HiOutlineMail className="size-10" />
          <div>
            <h3 className="text-xl sm:text-1xl font-semibold">
              Sign up to our Newsletters
            </h3>
            <p>...and receive $30 coupon for first shopping</p>
          </div>
        </div>
        <div className="w-full max-w-[500px] relative">
          <input
            className="py-4 px-6 w-full text-black rounded-full"
            type="text"
            placeholder="Enter Your Email Address..."
          />
          <button className="bg-accentDark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accent">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
