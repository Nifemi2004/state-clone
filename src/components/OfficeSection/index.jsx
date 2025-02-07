import React from "react";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";


const OfficeSection = () => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="mx-auto flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col items-center justify-center bg-[#1A2555]">
          <h2 className="text-2xl font-bold mb-4">
            Kwara Central Senatorial Office
          </h2>
          <span>1, Basin Road off Fate Roundabout, Ilorin</span>
          <div className="mt-4 space-y-2 text-center">
            <div className="flex items-center space-x-2">
              <span className="text-teal-400">
                <FaClock />
              </span>
              <span>
                Opening Hours: <span>Mon – Fri: 8:00 am – 5:00 pm</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal-400">
                <FaPhone />
              </span>
              <span>Phone: 0810 700 0860</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-teal-400">
                <FaEnvelope />
              </span>
              <span>Email: contact@kwaracentral.org</span>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex gap-[20rem] bg-[#202B5D] p-3 items-center justify-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li className="hover:underline flex items-center">
                <span className="text-teal-400">
                  <MdKeyboardArrowRight />
                </span>
                <a href="#">News & Updates</a>
              </li>
              <li className="hover:underline flex items-center">
                <span className="text-teal-400">
                  <MdKeyboardArrowRight />
                </span>
                <a href="#">Get Involved</a>
              </li>
              <li className="hover:underline flex items-center">
                <span className="text-teal-400">
                  <MdKeyboardArrowRight />
                </span>
                <a href="#">Public Complaint</a>
              </li>
              <li className="hover:underline flex items-center">
                <span className="text-teal-400">
                  <MdKeyboardArrowRight />
                </span>
                <a href="#">Constituency Offices</a>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31545.36331432842!2d4.556853049858277!3d8.479296170063294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036b92a8c9bc8d3%3A0xb1c504e1f8c1cdb8!2sFate%20Roundabout%2C%20Ilorin!5e0!3m2!1sen!2sng!4v1675712174848!5m2!1sen!2sng"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="mr-[3rem]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeSection;
