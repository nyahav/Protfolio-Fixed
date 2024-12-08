import { socialMedia } from "@/data";
import React from "react";

const Social = () => {
  return (
    <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
      <div className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <div
            key={info.id}
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            {info.link ? (
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ) : info.download ? (
              <a
                href={`${info.download}`} // Ensure the correct path to the PDF
                download
              >
                <img src={info.img} alt="download" width={20} height={20} />
              </a>
            ) : null}
          </div>
        ))}
      </div>
      <p className="md:text-base text-sm md:font-normal font-light">
        Copyright © 2024 Yahav Nir
      </p>
    </div>
  );
};

export default Social;
