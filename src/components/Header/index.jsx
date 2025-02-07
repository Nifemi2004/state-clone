import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Check if user scrolled past 50px
      setIsScrolled(currentScrollPos > 50);

      // Show or hide header based on scroll direction
      if (currentScrollPos > lastScrollTop) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }

      lastScrollTop = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
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
                      className={`absolute left-0 top-15 ml-2 mt-10 w-48 bg-white shadow-md  space-y-1 p-3 border border-gray-200 transition-all duration-300 ease-in-out transform ${
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
    </div>
  );
};

export default Header;
