import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const dropdown = [
    {
      title: "Osun Central",
      children: ["About Osun Central", "The Senators", "Legislative Aids"],
    },
    {
      title: "Media",
      children: ["hello"],
    },
    {
      title: "Downloads",
    },
    {
      title: "Projects",
    },
    {
      title: "Feedback",
    },
    {
      title: "Contacts",
    },
  ];

  return (
    <div className="flex justify-between p-5">
      <div>
        <div>
          <h2 className="w-[200px] text-blue-950">
            <span className="font-sans text-2xl tracking-wider">
              Osun Central{" "}
            </span>
            <span className="font-sans text-2xl">Senatorial District</span>
          </h2>
        </div>
      </div>
      <div>
        <div>
          <ul className="flex">
            {dropdown.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer p-4 pb-12 text-blue-950"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="hover:text-blue-400 ">
                  {item.title}
                  {item.children && (
                    <span className="float-right pl-1 pt-1">
                      <MdKeyboardArrowDown />
                    </span>
                  )}
                </span>

                {item.children && (
                  <ul
                    className={`absolute left-0 top-15 ml-2 mt-10 w-48 bg-white shadow-md  space-y-1 p-3 border border-gray-200 transition-all duration-300 ease-in-outtransform ${
                      hoveredItem === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-3 pointer-events-none"
                    }`}
                  >
                    {item.children.map((child, idx) => (
                      <li
                        key={idx}
                        className="p-2 hover:bg-blue-400 hover:text-white "
                      >
                        {child}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
