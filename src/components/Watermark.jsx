import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Watermark = () => {
  const handleNavigate = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full flex flex-col items-end justify-end lg:pr-16 pr-5 space-y-5">
      <span>Reach me out:</span>
      <div>
        <div
          onClick={() => handleNavigate("https://github.com/biillskiii")}
          className="flex items-center gap-x-5 cursor-pointer hover:opacity-80 mb-2"
          role="button"
          tabIndex={0}
        >
          <FaGithub size={16} />
          <p className="text-sm font-semibold">Mohammad Nabiel Dwi Ananda</p>
        </div>
        <div
          onClick={() =>
            handleNavigate("https://www.linkedin.com/in/mohammad-nabiel/")
          }
          className="flex items-center gap-x-5 cursor-pointer hover:opacity-80"
          role="button"
          tabIndex={0}
        >
          <FaLinkedin size={16} />
          <p className="text-sm font-semibold">Mohammad Nabiel Dwi Ananda</p>
        </div>
      </div>
    </div>
  );
};

export default Watermark;
