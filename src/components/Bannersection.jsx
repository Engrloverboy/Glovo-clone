import React from "react";
import video from "../assets/image/address-container-animation.webm";

const Bannersection = () => {
  return (
    <div className="banner">
      <section className="banner-flex container">
        {/* <video src={video}></video> */}
        <video controls>
          <source
            src="https://res.cloudinary.com/glovoapp/video/upload/website_assets/images/landing/address-container-animation.webm"
            type="video/webm"
          />
        </video>
        <div className="banner-word">
          <h2>Food delivery and more</h2>
          <p>Groceries, shops, pharmacies, anything!</p>
        </div>
      </section>
    </div>
  );
};

export default Bannersection;
