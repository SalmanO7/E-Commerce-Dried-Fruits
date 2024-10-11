import React from "react";
import CategoryCard from "./CategoryCard";


const Data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "../../assets/category__1.jpg",
  },
  {
    id: 1,
    name: "Fresh Vegs",
    count: "8 Products",
    img: "../../assets/category__2.jpg",
  },

  {
    id: 2,
    name: "Canned Goods",
    count: "11 Products",
    img: "../../assets/category__3.jpg",
  },
  
  {
    id: 3,
    name: "Bread & Bakery",
    count: "12 Products",
    img: "../../assets/category__4.jpg",
  },
  {
    id: 4,
    name: "Fishes",
    count: "10 Products",
    img: "../../assets/category__5.jpg",
  },
  {
    id: 6,
    name: "Soft Drinks",
    count: "5 Products",
    img: "../../assets/category__3.jpg",
  },
  {
    id: 5,
    name: "Eggs & Dairy",
    count: "6 Products",
    img: "../../assets/category__6.jpg",
  },
  
  {
    id: 7,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "../../assets/category__1.jpg",
  },
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Data.map((eachData) => {
          return (
            <CategoryCard
              key={eachData.id}
              img={eachData.img}
              name={eachData.name}
              count={eachData.count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
