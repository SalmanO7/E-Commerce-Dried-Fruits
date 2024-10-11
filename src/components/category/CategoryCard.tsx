import React from "react";
interface propsType {
  img: string;
  name: string;
  count: string;
}
const CategoryCard: React.FC<propsType> = ({ img, name, count }) => {
  return (
    <div className="border border-gray-200 h-[100px] max-w-[300px] items-center  m-1 hover:border-gray-300 hover:scale-105 transition-transform rounded-md">
      <div className="flex justify-between items-center pt-2 px-5 ">
        <div className="space-y-1">
          <h3 className="font-medium  sm:text-1xl">{name}</h3>
          <p className="text-gray-500 ">{count}</p>
        </div>
        <img className="w-[80px] " src={img} alt={name} />
      </div>
    </div>
  );
};

export default CategoryCard;
