import React from "react";
import { socialMediaData, followMeMsg } from "../data";

const Socials = () => {
  return (
    <div>
      <p className="text-lg text-center mt-6 text-white">{followMeMsg}</p>
      <ul className="flex flex-col mt-4">
        {socialMediaData.map((socialMedia, index) => (
          <li
            key={index}
            className="mb-2 border p-1 rounded-xl duration-300 text-white hover:bg-white hover:text-black"
          >
            <a href={socialMedia.url} className="flex items-center">
              <img
                className="w-10 h-10 bg-white p-0.5 rounded-full duration-300"
                src={socialMedia.icon}
                alt={socialMedia.title}
                title={socialMedia.title}
              />
              <span className="ml-2">{socialMedia.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Socials };
