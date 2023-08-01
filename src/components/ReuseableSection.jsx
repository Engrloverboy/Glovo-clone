import React from "react";

const ReuseableSection = (props) => {
  return (
    <section className="reuse container">
      <div className="image">
        <img src={props.picture} alt="" />
        <p>{props.desc}</p>
      </div>
    </section>
  );
};

export default ReuseableSection;
