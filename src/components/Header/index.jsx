import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
      setIsScrolled(currentScrollPos > 50);
      if (currentScrollPos > lastScrollTop) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
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
      <div className="flex justify-between p-5 items-center">
        {/* Left Side - Logo */}
        <div>
          <h2 className="w-[200px] text-blue-950">
            <span className="font-sans text-2xl tracking-wider">
              Osun Central{" "}
            </span>
            <span className="font-sans text-2xl">Senatorial District</span>
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="flex">
            {dropdown.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer p-4 text-blue-950"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="hover:text-blue-400 flex items-center">
                  {item.title}
                  {item.children && <MdKeyboardArrowDown className="ml-1" />}
                </span>

                {item.children && (
                  <ul
                    className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-md border border-gray-200 transition-all duration-300 transform ${
                      hoveredItem === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-3 pointer-events-none"
                    }`}
                  >
                    {item.children.map((child, idx) => (
                      <li
                        key={idx}
                        className="p-2 hover:bg-blue-400 hover:text-white"
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

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl"
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-300 z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-3xl"
          >
            <MdClose />
          </button>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col space-y-4 text-xl">
            {dropdown.map((item, index) => (
              <li key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer p-3 hover:bg-gray-100"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  <span>{item.title}</span>
                  {item.children && <MdKeyboardArrowDown />}
                </div>

                {item.children && openDropdown === index && (
                  <ul className="ml-4 border-l pl-3 space-y-2">
                    {item.children.map((child, idx) => (
                      <li key={idx} className="hover:text-blue-400">
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
