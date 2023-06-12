import React from "react";
import { MdAnalytics } from "react-icons/md";
import { LuDumbbell } from "react-icons/lu";
import { AiFillSetting } from "react-icons/ai"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bottom-5 space-x-10 fixed w-full place-content-around ">
      <Link className="link" to={"/"}><MdAnalytics /></Link>
      <Link className="link" to={"/statistics"}><LuDumbbell /></Link>
      <Link className="link" to={"/statistics"}><AiFillSetting /></Link>
    </div>
  );
};

export default Navbar;
