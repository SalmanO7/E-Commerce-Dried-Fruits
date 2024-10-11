import React from "react";
import BlogCard from "./card/BlogCard";


const Data = [
  {
    img: '../../assets/post__2.jpg',
    title: "Healthy Food Healthy Life",
    date: "July 19, 2024",
    comment: 2,
  },
  {
    img: '../../assets/post__1.jpg',
    title: "Healthy Food Healthy Life",
    date: "Aug 2, 2024",
    comment: 8,
  },
  {
    img: '../../assets/post__3.jpg',
    title: "Healthy Food Healthy Life",
    date: "October 10, 2024",
    comment: 2,
  },
];

const Blog = () => {
  return (
    <div className="container pt-16 ">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p>
        Present posts in a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {Data.map((card) => {
          return (
            <BlogCard
              key={card.date}
              img={card.img}
              title={card.title}
              date={card.date}
              comment={card.comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
