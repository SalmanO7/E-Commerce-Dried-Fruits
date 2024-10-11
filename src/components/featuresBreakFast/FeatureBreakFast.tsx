import React from "react";
import BreakFastCards from "./breakFast/BreakFastCards";

const Data = [
  {
    id: 2,
    img: "/assets/product__3.jpg",
    name: "Jewel Cranberries",
    price: "$200",
  },
  { id: 0, img: "/assets/product__5.jpg", name: "Fresh Tomato", price: "$50" },
  {
    id: 3,
    img: "/assets/product__4.jpg",
    name: "Almond organic",
    price: "$100",
  },

  {
    id: 1,
    img: "/assets/product__2.jpg",
    name: "Crunchy Crisps",
    price: "$300",
  },
];

const FeaturesBreakFast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">BreakFast & Dairy</h3>
          <p className="text-gray-600 pt-2 ">
            Buy best quality breakfast online from big-basket-stop near you
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0 flex">
          <div className="feature_btn">Eggs & Dairy</div>
          <button className="text-gray-600 hover:text-accent">pizza</button>
          <button className="text-gray-600 hover:text-accent">Snacks</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/assets/feature__2.jpg"
            alt="Feature img"
          />
        </div>
        {Data.map((product) => {
          return (
            <BreakFastCards
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesBreakFast;
