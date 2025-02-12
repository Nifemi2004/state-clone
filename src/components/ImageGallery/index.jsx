import React, { useState } from "react";

const ImageGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredImage, setHoveredImage] = useState(null);

  const categories = ["All", "Events", "Oversight", "International Asgmt."];

  const images = [
    {
      id: 1,
      src: "/News-1.jpg",
      category: "Events",
      caption:
        "The opening session of an important summit, showcasing key discussions and planning for the future.",
      alt: "Summit opening session",
    },
    {
      id: 2,
      src: "/News-1.jpg",
      category: "Oversight",
      caption: "Committee meeting discussing policy implementations",
      alt: "Committee meeting",
    },
    {
      id: 3,
      src: "/News-1.jpg",
      category: "International Asgmt.",
      caption: "International delegation meeting",
      alt: "International meeting",
    },
    {
      id: 4,
      src: "/News-1.jpg",
      category: "Events",
      caption:
        "The opening session of an important summit, showcasing key discussions and planning for the future.",
      alt: "Summit opening session",
    },
    {
      id: 5,
      src: "/News-1.jpg",
      category: "Oversight",
      caption: "Committee meeting discussing policy implementations",
      alt: "Committee meeting",
    },
    {
      id: 6,
      src: "/News-1.jpg",
      category: "International Asgmt.",
      caption: "International delegation meeting",
      alt: "International meeting",
    },
    {
      id: 7,
      src: "/News-1.jpg",
      category: "Events",
      caption:
        "The opening session of an important summit, showcasing key discussions and planning for the future.",
      alt: "Summit opening session",
    },
    {
      id: 8,
      src: "/News-1.jpg",
      category: "Oversight",
      caption: "Committee meeting discussing policy implementations",
      alt: "Committee meeting",
    },
    {
      id: 9,
      src: "/News-1.jpg",
      category: "International Asgmt.",
      caption: "International delegation meeting",
      alt: "International meeting",
    },
    {
      id: 10,
      src: "/News-1.jpg",
      category: "Events",
      caption:
        "The opening session of an important summit, showcasing key discussions and planning for the future.",
      alt: "Summit opening session",
    },
    {
      id: 11,
      src: "/News-1.jpg",
      category: "Oversight",
      caption: "Committee meeting discussing policy implementations",
      alt: "Committee meeting",
    },
    {
      id: 12,
      src: "/News-1.jpg",
      category: "International Asgmt.",
      caption: "International delegation meeting",
      alt: "International meeting",
    },
    // Add more images as needed
  ];

  const filteredImages = images.filter(
    (image) => activeCategory === "All" || image.category === activeCategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center gap-6 mb-8 ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`lg:px-4 py-2 duration-200 
              ${
                activeCategory === category
                  ? " text-blue-900 font-bold"
                  : "text-blue-900 font-bold hover:text-blue-500"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden"
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
            {hoveredImage === image.id && (
              <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <p className="text-white text-center">{image.caption}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
