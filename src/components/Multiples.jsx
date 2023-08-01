import React from "react";
import ReuseableSection from "./ReuseableSection";
import Picture1 from "../assets/image/pics1.avif";
import Picture2 from "../assets/image/pics2.avif";
import Picture3 from "../assets/image/pics3.avif";
import Picture4 from "../assets/image/pics4.avif";
import Picture5 from "../assets/image/pics5.avif";
import Picture6 from "../assets/image/pics6.avif";
import Picture7 from "../assets/image/pics7.avif";
import Picture8 from "../assets/image/pics8.avif";

const Multiples = () => {
  return (
    <div className="wrapper">
      <h2>Top restaurants and more in Glovo</h2>
      <section className="flex">
        <ReuseableSection picture={Picture1} desc="Mc Donald" />
        <ReuseableSection picture={Picture2} desc="KFC" />
        <ReuseableSection picture={Picture3} desc="Burger King" />
        <ReuseableSection picture={Picture4} desc="Carrefour" />
        <ReuseableSection picture={Picture5} desc="PizzaHut" />
        <ReuseableSection picture={Picture6} desc="PapaJohn's" />
        <ReuseableSection picture={Picture7} desc="Subway" />
        <ReuseableSection picture={Picture8} desc="TacoBell" />
      </section>
    </div>
  );
};

export default Multiples;
