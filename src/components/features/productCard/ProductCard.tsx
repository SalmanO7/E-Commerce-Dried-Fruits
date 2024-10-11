import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { MdOutlineShoppingBag } from "react-icons/md";

interface propsType {
  img: string;
  name: string;
  price: string;
}
const ProductCard: React.FC<propsType> = ({ img, name, price }) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-md relative">
      <img src={img} alt={name} />
      <div className="scale-y-2 relative p-4">
        <div className="text-yellow-500 flex gap-1 text-[20px]">
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarHalfOutline />
        </div>
        <h3 className="font-medium">{name}</h3>
        <h3 className=" text-xl text-red-600 md:text-2xl">{price}</h3>
        <div className="absolute top-1 right-2 bg-accent hover:bg-accentDark text-white text-[20px] w-[40px] h-[40px] rounded-full grid place-items-center cursor-pointer">
            <MdOutlineShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
