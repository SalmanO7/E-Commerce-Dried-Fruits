import React from "react";

const Banner = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 place-items-center gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 transition-transform"
            src="../../assets/banner__1.jpg"
            alt="banner img"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-105 transition-transform"
            src="../../assets/banner__2.jpg"
            alt="banner img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
