import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const NewsCard = ({ data }) => {
  return (
    <div className=" xl:w-[35rem] bg-white text-white shadow-lg  overflow-hidden ">
      {/* Image */}
      <img src={data.image} alt={data.title} className="w-full object-cover" />

      {/* Card Body */}
      <div className="p-4">
        {/* Date */}
        <span className="text-sm bg-blue-500 text-white px-2 py-1 rounded">
          {data.date}
        </span>

        {/* Categories */}
        <p className="mt-2 text-sm text-blue-900">
          In{" "}
          {data.categories.map((category, index) => (
            <span key={index} className="underline">
              {category}
              {index < data.categories.length - 1 && ", "}
            </span>
          ))}
          <i className="far fa-comment ml-2"></i> {data.comments}
        </p>

        {/* Title */}
        <h5 className="mt-2 text-xl font-bold text-blue-400">{data.title}</h5>

        {/* Description */}
        <p className="mt-2 text-l text-blue-900">
          {data.description}
        </p>

        {/* Read More */}
        <a
          href={data.link}
          className="mt-4 inline-block text-blue-400 hover:underline text-sm flex gap-2 items-center"
        >
          Continue Reading <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
