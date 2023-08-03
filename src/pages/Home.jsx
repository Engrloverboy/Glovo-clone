import React from "react";
import Bannersection from "../components/Bannersection";
import Multiples from "../components/Multiples";
import Multiples2 from "../components/Multiples2";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Bannersection />
      <Multiples2 />
      <Multiples />
    </div>
  );
};

export default Home;
