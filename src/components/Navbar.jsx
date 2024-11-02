import React from "react";
import Avatar from "../assets/avatar.jpg";
const Navbar = () => {
  return (
    <div className="px-32  flex items-center justify-between">
      <img className="w-12 h-12 rounded-full" src={Avatar} alt="avatar" />
      <p className="font-semibold">Url Shortener</p>
    </div>
  );
};

export default Navbar;
