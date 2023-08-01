import React from "react";
import Reusesection2 from "./Reusesection2";
import Restaurant from "../assets/image/restaurants.svg";
import Delivery from "../assets/image/delivery.svg";
import Groceries from "../assets/image/groceries.svg";

const Multiples2 = () => {
  return (
    <section className="all">
      <h2>Anything delivered</h2>
      <div className="flex-all">
        <Reusesection2
          pics={Restaurant}
          subheading={"Your city's top restaurants"}
          words={
            "With a great variety of restaurants you can order your favourite food or explore new restaurants nearby!"
          }
        />

        <Reusesection2
          pics={Delivery}
          subheading={"Fast Delivery"}
          words={
            "Like a flash! Order or send anything in your city and receive it in minutes"
          }
        />

        <Reusesection2
          pics={Groceries}
          subheading={"Groceries delivery & more"}
          words={
            "Find anything you need! From supermarkets to shops, pharmacies to florists — if it's in your city order it and receive it."
          }
        />
      </div>
      <div className="carry-btn">
        <button className="btn">Explore stores around you</button>
      </div>
    </section>
  );
};

export default Multiples2;
