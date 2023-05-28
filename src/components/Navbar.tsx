import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "src/pages/HomePage";

const Navbar = () => {
  <Routes>
    <Route path="/homepage" element={<HomePage />}>
      HomePage
    </Route>
  </Routes>;
  return (
    <div>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/statistics"}>Statistics</Link>
    </div>
  );
};

export default Navbar;
