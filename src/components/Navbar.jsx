import React from "react";
import Glovo from "../assets/image/Glovo_logo.png";

const Navbar = () => {
  return (
    <nav>
      <section className="container">
        <section className="container1">
          <img src={Glovo} alt="" />

          <button>Get Started</button>
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
