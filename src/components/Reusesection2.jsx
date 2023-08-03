import React from "react";

const Reusesection2 = (props) => {
  return (
    <section className="reuse-2 container">
      <div className="image-2">
        <img src={props.pics} alt="" />
        <h3>{props.subheading}</h3>
        <p>{props.words} <span>{props.yellowtext}</span> </p>
      </div>
    </section>
  );
};

export default Reusesection2;
