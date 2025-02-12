import React from "react";
import Slider from "react-slick";

const offices = [
  {
    title: "Headquarter",
    address: "01, Basin Road off Fate Roundabout, Ilorin",
    email: "contact@osuncentral.org",
    phone: "0706 576 4513",
  },
  {
    title: "Asa Constituency Office",
    address: "Water Side Area along Ogele, Eyenkorin",
    email: "contact@osuncentral.org",
    phone: "0803 377 7063",
  },
  {
    title: "Ilorin East Constituency Office",
    address: "08, Sokoto Road Sabo Oke, Ilorin",
    email: "contact@osuncentral.org",
    phone: "0813 358 5989",
  },
  {
    title: "Asa Constituency Office",
    address: "Water Side Area along Ogele, Eyenkorin",
    email: "contact@osuncentral.org",
    phone: "0803 377 7063",
  },
  {
    title: "Ilorin East Constituency Office",
    address: "08, Sokoto Road Sabo Oke, Ilorin",
    email: "contact@osuncentral.org",
    phone: "0813 358 5989",
  },
];

const OfficeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Large tablets and small desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-sm md:max-w-2xl lg:max-w-6xl mx-auto p-4 md:p-6">
      <Slider {...settings}>
        {offices.map((office, index) => (
          <div key={index} className="px-2 md:px-4">
            {" "}
            {/* Reduced padding on small screens */}
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md text-left">
              <h3 className="bg-blue-400 text-white text-lg font-semibold px-3 py-2 inline-block">
                {office.title}
              </h3>
              <p className="mt-4 text-gray-700">{office.address}</p>
              <p className="mt-2">
                <a
                  href={`mailto:${office.email}`}
                  className="text-black hover:underline"
                >
                  {office.email}
                </a>
              </p>
              <p className="mt-2 text-gray-700">
                Call/WhatsApp: {office.phone}
              </p>
              <button className="mt-4 border border-blue-400 text-blue-400 px-6 py-2 rounded-full hover:text-blue-500 hover:border-blue-500 transition duration-300">
                Get Direction
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfficeSlider;
