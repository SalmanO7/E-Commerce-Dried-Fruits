import React from "react";
interface propsType {
  img: string;
  title: string;
  comment: number;
  date: string;
}

const BlogCard: React.FC<propsType> = ({ img, title, comment, date }) => {
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt={title}
      />
      <div className="text-accent font-medium ">
        <span>{date} /</span>
        <span>{comment} Comments</span>
        <h3 className="font-medium text-black pt-1 text-xl">{title}</h3>
      </div>
    </div>
  );
};

export default BlogCard;
