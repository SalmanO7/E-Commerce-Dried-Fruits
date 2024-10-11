import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiMoneyWavyLight } from "react-icons/pi";
import { GoGift } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import ServiceCard from "./serviceCard/ServiceCard";

const Data = [
  {
    title: "Free Shipping",
    icon: <MdOutlineLocalShipping className="size-[28px]" />,
    desc: "Fast shipping ensures your orders time",
  },
  {
    title: "Free Best Price",
    icon: <PiMoneyWavyLight className="size-[28px]" />,
    desc: "Best prices on top-quality products.",
  },
  {
    title: "Free Curbside Pickup",
    icon: <GoGift className="size-[28px]" />,
    desc: "Free curbside pickup available for a free shopping",
  },
  {
    title: "Support 24/7",
    icon: <FiPhone className="size-[28px]" />,
    desc: "Our 24/7 customer support is here.",
  },
];

const Services = () => {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Data.map((card) => {
          return (
            <ServiceCard
              key={card.title}
              title={card.title}
              desc={card.desc}
              icon={card.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
