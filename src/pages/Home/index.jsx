import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import {
  FaCheckCircle,
  FaMap,
  FaUsers,
  FaHandshake,
  FaBook,
  FaTree,
  FaBuilding,
  FaShieldAlt,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineApartment } from "react-icons/ai";
import { PiBalloonThin } from "react-icons/pi";
import CountUp from "react-countup";
import NewsCard from "../../components/NewsCards";
import ImageGallery from "../../components/ImageGallery";
import OfficeSlider from "../../components/OfficeSlider";
import OfficeSection from "../../components/OfficeSection";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const data = [
      {
        id: 1,
        date: "January 16, 2025",
        categories: ["Legislation", "News"],
        comments: 0,
        title:
          "Agriculture: Senator Mustapha Presides Over Joint 2025 Budget Defense",
        description:
          "Senator Saliu Mustapha, Chairman of the Senate Committee on Agricultural Production, Services & Rural Development, has presided over the joint 2025 budget defense sessions by the Senate and House Committees....",
        image: "/News-1.jpg",
        link: "#",
      },
      {
        id: 1,
        date: "January 16, 2025",
        categories: ["Legislation", "News"],
        comments: 0,
        title:
          "Agriculture: Senator Mustapha Presides Over Joint 2025 Budget Defense",
        description:
          "Senator Saliu Mustapha, Chairman of the Senate Committee on Agricultural Production, Services & Rural Development, has presided over the joint 2025 budget defense sessions by the Senate and House Committees....",
        image: "/News-1.jpg",
        link: "#",
      },
      {
        id: 1,
        date: "January 16, 2025",
        categories: ["Legislation", "News"],
        comments: 0,
        title:
          "Agriculture: Senator Mustapha Presides Over Joint 2025 Budget Defense",
        description:
          "Senator Saliu Mustapha, Chairman of the Senate Committee on Agricultural Production, Services & Rural Development, has presided over the joint 2025 budget defense sessions by the Senate and House Committees....",
        image: "/News-1.jpg",
        link: "#",
      },
      {
        id: 1,
        date: "January 16, 2025",
        categories: ["Legislation", "News"],
        comments: 0,
        title:
          "Agriculture: Senator Mustapha Presides Over Joint 2025 Budget Defense",
        description:
          "Senator Saliu Mustapha, Chairman of the Senate Committee on Agricultural Production, Services & Rural Development, has presided over the joint 2025 budget defense sessions by the Senate and House Committees....",
        image: "/News-1.jpg",
        link: "#",
      },
      {
        id: 1,
        date: "January 16, 2025",
        categories: ["Legislation", "News"],
        comments: 0,
        title:
          "Agriculture: Senator Mustapha Presides Over Joint 2025 Budget Defense",
        description:
          "Senator Saliu Mustapha, Chairman of the Senate Committee on Agricultural Production, Services & Rural Development, has presided over the joint 2025 budget defense sessions by the Senate and House Committees....",
        image: "/News-1.jpg",
        link: "#",
      },
      {
        id: 1,
        date: "January 16, 2025",
        categories: ["Legislation", "News"],
        comments: 0,
        title:
          "Agriculture: Senator Mustapha Presides Over Joint 2025 Budget Defense",
        description:
          "Senator Saliu Mustapha, Chairman of the Senate Committee on Agricultural Production, Services & Rural Development, has presided over the joint 2025 budget defense sessions by the Senate and House Committees....",
        image: "/News-1.jpg",
        link: "#",
      },
      {
        id: 1,
        date: "January 16, 2025",
        categories: ["Legislation", "News"],
        comments: 0,
        title:
          "Agriculture: Senator Mustapha Presides Over Joint 2025 Budget Defense",
        description:
          "Senator Saliu Mustapha, Chairman of the Senate Committee on Agricultural Production, Services & Rural Development, has presided over the joint 2025 budget defense sessions by the Senate and House Committees....",
        image: "/News-1.jpg",
        link: "#",
      },
      {
        id: 1,
        date: "January 16, 2025",
        categories: ["Legislation", "News"],
        comments: 0,
        title:
          "Agriculture: Senator Mustapha Presides Over Joint 2025 Budget Defense",
        description:
          "Senator Saliu Mustapha, Chairman of the Senate Committee on Agricultural Production, Services & Rural Development, has presided over the joint 2025 budget defense sessions by the Senate and House Committees....",
        image: "/News-1.jpg",
        link: "#",
      },
    ];
    // Simulate fetching data from an API or file
    setCards(data);
  }, []);

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

  const focusItems = [
    {
      icon: <FaHandshake size={40} className="text-blue-900 w-[20rem]" />,
      title: "Human Capital Development",
      textColor: "text-blue-900",
      hoverColor: "hover:bg-blue-900 hover:text-white",
    },
    {
      icon: <FaBook size={40} className="text-blue-300 w-[20rem]" />,
      title: "Education",
      textColor: "text-blue-300",
      hoverColor: "hover:bg-blue-300 hover:text-white",
    },
    {
      icon: <FaTree size={40} className="text-blue-900 w-[20rem]" />,
      title: "Agriculture",
      textColor: "text-blue-900",
      hoverColor: "hover:bg-blue-900 hover:text-white",
    },
    {
      icon: <FaBuilding size={40} className="text-blue-300 w-[20rem]" />,
      title: "Development of Infrastructure",
      textColor: "text-blue-300",
      hoverColor: "hover:bg-blue-300 hover:text-white",
    },
    {
      icon: <FaShieldAlt size={40} className="text-blue-900 w-[20rem]" />,
      title: "Security",
      textColor: "text-blue-900",
      hoverColor: "hover:bg-blue-900 hover:text-white",
    },
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
        className="flex items-center justify-center px-[12.875rem] py-[3rem] bg-blue-950"
        style={{
          backgroundImage: `url(/pattern.png)`,
          backgroundSize: "cover",
        }}
      >
        <div className="text-left w-[100%] pl-[50px]">
          <div className="text-7xl text-blue-400 font-bold">Osun Central</div>
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
      <div className="flex gap-7 px-[13rem] py-[6rem]">
        <div className="w-[110rem] flex flex-col gap-[2rem]">
          <div className="text-blue-400 text-[40px] ">Senator's Message</div>
          <div className="text-blue-900">
            <div className="pb-[20px] text-[17px]">
              "Dear People of Kwara Central,
            </div>
            <div className="pb-[20px] text-[17px]">
              I extend my heartfelt gratitude to each of you for your unwavering
              support and trust. Representing our great district is both an
              honor and a responsibility I hold dear. Together, we have made
              significant strides, and I remain committed to driving
              development, fostering unity, and addressing the needs of every
              community.
            </div>
            <div className="pb-[20px] text-[17px]">
              As we continue this journey, let’s keep working hand in hand to
              build a brighter, more prosperous Kwara Central. Our strength lies
              in our shared vision, and I am confident that, together, we will
              achieve even greater things."
            </div>
          </div>
          <div className="text-[17px] text-blue-900">
            <span className="text-blue-400 text-l">– Saliu Mustapha,</span>{" "}
            Kwara Central Senator
          </div>
        </div>
        <div className="w-[100rem]">
          <img src="/senator.jpg" alt="Senator" />
        </div>
        <div className="w-[110rem] gap-[2rem]">
          <div className="text-blue-400 text-[40px]">
            Parliamentary Function
          </div>
          <div>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <FaCheckCircle
                    style={{
                      marginRight: "12px",
                      color: "blue",
                      fontSize: "25px",
                      marginTop: "5px",
                    }}
                  />
                </div>
                <div>
                  <div className="text-blue-900 text-[20px] pb-[5px]">
                    Legislation{" "}
                  </div>
                  <div className="text-[17px]">
                    Enacting Laws; propose, debate, and pass legislation that
                    shapes the legal framework of our country, addressing
                    various issues such as social policies, economic
                    regulations, and public safety.
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <FaCheckCircle
                    style={{
                      marginRight: "12px",
                      color: "blue",
                      fontSize: "25px",
                      marginTop: "5px",
                    }}
                  />
                </div>
                <div>
                  <div>
                    <div className="text-blue-900 text-[20px] pb-[5px]">
                      Representation
                    </div>
                    <div className="text-[17px]">
                      Represent my constituents, voice their concerns, and
                      advocate for their rights and needs in the decision-making
                      process.
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                }}
              >
                <div>
                  <FaCheckCircle
                    style={{
                      marginRight: "12px",
                      color: "blue",
                      fontSize: "25px",
                      marginTop: "5px",
                    }}
                  />
                </div>
                <div>
                  <div>
                    <div className="text-blue-900 text-[20px] pb-[5px]">
                      Oversight
                    </div>
                    <div className="text-[17px]">
                      Oversee, monitor, investigate into the activities of
                      government ministries, departments and agencies in
                      relation to enabling legislation and making sure it serves
                      the best interests of the people.
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex gap-20 items-center justify-center px-[13rem] py-[6rem] text-center text-white"
        style={{
          backgroundImage: `url(/bg_couter-1.jpg)`,
        }}
      >
        <div className="w-[13rem]">
          <div className="flex items-center justify-center">
            <FaUsers className="text-[75px] text-blue-400" />
          </div>
          <div className="text-[50px]">
            <CountUp start={0} end={1.9} duration={1.5} suffix="M" />
          </div>
          <div className="text-xl">Estimated Population of Kwara Central</div>
        </div>
        <div className="w-[13rem]">
          <div className="flex items-center justify-center">
            <FaMap className="text-[75px] text-blue-400" />
          </div>
          <div className="text-[50px]">
            <CountUp start={0} end={2.1} duration={2.5} suffix="K" />
          </div>
          <div className="text-xl">Estimated Landmass in square kilometres</div>
        </div>
        <div className="w-[13rem]">
          <div className="flex items-center justify-center">
            <AiOutlineApartment className="text-[75px] text-blue-400" />
          </div>
          <div className="text-[50px]">
            <CountUp start={0} end={3} duration={2.5} suffix="rd" />
          </div>
          <div className="text-xl">District With Better Cost of Living</div>
        </div>
        <div className="w-[13rem]">
          <div className="flex items-center justify-center">
            <PiBalloonThin className="text-[75px] text-blue-400" />
          </div>
          <div className="text-[50px]">
            <CountUp start={0} end={8} duration={2.5} prefix="+" />
          </div>
          <div className="text-xl">Diverse languages and culture</div>
        </div>
      </div>
      <div className="text-center py-16 pb-[7rem]">
        {/* Title */}
        <h2 className="text-[2rem] font-bold text-blue-800 mb-8">
          Legislative Focus
        </h2>

        {/* Focus Items */}
        <div className="flex justify-center gap-10 flex-wrap">
          {focusItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-4 p-4 ${item.hoverColor}`}
            >
              <div className="w-20 h-20 flex items-center justify-center">
                {item.icon}
              </div>
              <p className={`${item.textColor} font-medium text-xl w-[10rem]`}>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* H.E.A.D.S */}
        <h3 className="text-[4.5rem] font-extrabold text-blue-900 mt-16 tracking-widest">
          H.E.A.D.S
        </h3>
      </div>
      <div className="bg-[#07173b] px-[11rem] pb-10 flex flex-col items-center">
        <h3 className="text-blue-400 text-[40px] font-semibold text-center">
          News & Updates
        </h3>
        <p className="text-white text-center ">
          Latest news, updates and stories on the activities of the Senator
          representing Kwara Central Senatorial District, Mallam Saliu Mustapha
          and his team.
        </p>

        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card) => (
            <NewsCard key={card.id} data={card} />
          ))}
        </div>
        <div className="m-10 w-[9rem] p-3 text-center text-white p-[10px 20px 12px 18px] bg-[#073077]">
          More News
        </div>
      </div>
      <div className="bg-white px-[11rem] flex flex-col items-center pb-[3rem]">
        <h3 className="text-blue-900 text-[40px] font-semibold text-center">
          Gallery
        </h3>
        <p className="text-center text-blue-900 text-[18px]">
          Explore moments from Senator Saliu Mustapha’s legislative journey.
          This gallery showcases his work in the Senate—debating bills,
          sponsoring motions, attending plenary sessions, participating in key
          Senate sessions and engaging with policymakers—all focused on
          representing Kwara Central and driving national progress.
        </p>
        <div>
          <ImageGallery />
        </div>
        <div className="w-[9rem] p-3 text-center text-white p-[10px 20px 12px 18px] bg-[#073077]">
          View More
        </div>

        <div className="mt-[4rem] flex gap-[10rem]">
          <img src="./Shot1.png" alt="shot 1" />
          <img src="./Shot2.png" alt="shot 2" />
        </div>
      </div>
      <div className="bg-[#07173b] px-[9rem] py-[3rem] flex flex-col items-center">
        <h3 className="text-white text-[40px] font-semibold text-center">
          Senatorial Constituency Offices
        </h3>
        <div>
          <OfficeSlider />
        </div>
      </div>
      <div className="bg-white px-[10rem] flex items-center py-[2rem]">
        <img src="./Coat_of_arms_of_Nigeria.png" alt="" className="w-[15rem]" />
        <img src="./national_assembly.png" alt="" className="w-[15rem]" />
        <img
          src="./Seal_of_the_Senate_of_Nigeria.png"
          alt=""
          className="w-[15rem]"
        />
        <img src="./kwsg_logo.png" alt="" className="w-[15rem]" />
        <img src="./office_of_the_turaki.png" alt="" className="w-[15rem]" />
      </div>
      <div>
        <OfficeSection />
      </div>
      <div className="flex text-center items-center justify-center flex-col text-center p-10 bg-[#07173b] gap-3">
        <div className="flex text-white gap-2">
          <span className="border border-blue-900 bg-blue-900 p-2 rounded-full">
            <FaFacebookSquare />
          </span>
          <span className="border border-blue-400 bg-blue-400 p-2 rounded-full">
            <FaTwitter />
          </span>
        </div>
        <div className="text-white ">
          Turaki Media Team © 2025. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Home;
