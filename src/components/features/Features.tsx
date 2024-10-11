import React from "react";
import ProductCard from "./productCard/ProductCard";

const Data = [
  { id: 0, img: "/assets/product__1.jpg", name: "Dried Mango", price: "$500" },
  { id: 1, img: "/assets/product__2.jpg", name: "Crunchy Crisps", price: "$300" },
  { id: 2, img: "/assets/product__3.jpg", name: "Jewel Cranberries", price: "$200" },
  { id: 3, img: "/assets/product__4.jpg", name: "Almond organic", price: "$100" },
];

const Features = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-600 pt-2 ">
            Buy farm fresh fruits and vegetables online at the price
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0 flex">
          <div className="feature_btn">Fruits</div>
          <button className="text-gray-600 hover:text-accent">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img
            className="w-full h-full object-cover"
            src="/assets/feature__1.jpg"
            alt="Feature img"
          />
        </div>
        {Data.map((product) => {
          return (
            <ProductCard
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

export default Features;
