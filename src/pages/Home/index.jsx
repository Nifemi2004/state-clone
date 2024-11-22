import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

const Home = () => {
  const images = [
    "/Slider1.jpg",
    "/Slider2.jpg",
    "/Slider3.jpg",
    "/Slider4.jpg",
    "/Slider5.jpg",
    "/Slider6.jpg",
    "/Slider7.jpg",
    "/Slider8.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
      <div
        className="relative h-[70vh] w-full bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        <Header />
        <div className="flex items-center justify-center h-[65%]">
          <h1 className="text-white text-4xl md:text-8xl font-bold text-center p-4 w-[85vw]">
            The Most Exciting District To Live, Work, Visit and Invest In.
          </h1>
        </div>
      </div>
      <div
        className="flex items-center justify-center px-[205px] py-[50px] bg-blue-950"
        style={{
          backgroundImage: `url(/pattern.png)`,
          backgroundSize: "cover",
        }}
      >
        <div className="text-left w-[100%] pl-[100px]">
          <div className="text-7xl text-blue-400 font-extrabold">Osun Central</div>
          <div>
            <p className="pt-[2rem] leading-7 text-xl w-[95%] text-white text-justify">
              Osun Central is one of the three senatorial districts in Osun
              State, located in Southwestern Nigeria. Known for its vibrant
              blend of urban and semi-urban areas, Osun Central covers six Local
              Government Areas: Osogbo, Olorunda, Ifelodun, Boripe, Odo-Otin,
              and Ila.
            </p>
            <p className="pt-[2rem] leading-7 text-xl w-[95%] text-white text-justify">
              Home to a peaceful and enterprising population, Osun Central is
              inhabited by people from diverse cultural backgrounds, primarily
              Yoruba, along with Hausa, Fulani, Igbo, and other ethnicities.
            </p>
            <p className="py-[2rem] leading-7 text-xl w-[95%] text-white text-justify">
              Osun Central has seen steady growth in its industrial sector,
              particularly in industries such as textiles, food processing, and
              agriculture. This economic development is further supported by the
              presence of several commercial banks, microfinance institutions,
              and other financial services that cater to the district's needs.
            </p>
          </div>
          <div>
            <button className="px-[25px] py-[7px] bg-blue-400">
              <span className="text-white text-lg">Read More</span>
            </button>
          </div>
        </div>
        <div>
          <img src="/Placeholder.jpg" alt="" className="w-[150%] " />
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>

        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
