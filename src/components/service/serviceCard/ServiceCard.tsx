import React from "react";

interface propsType {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

const ServiceCard: React.FC<propsType> = ({ title, icon, desc }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className="bg-gray-200 w-[50px] h-[50
      px] text-accentDark size-10 grid place-items-center rounded-full"
      >
        {icon}
      </div>
      <div>
        <h3 className="text-accent font-medium  text-[17px]">{title}</h3>
        <p className="text-gray-500 text-[13px]">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
