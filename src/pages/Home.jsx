import React from "react";
import Bannersection from "../components/Bannersection";
import Deliverycountries2 from "../components/Deliverycountries2";
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
      <Deliverycountries2 />
    </div>
  );
};

export default Home;
