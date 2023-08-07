import React from "react";
import Deliverycountries from "./Deliverycountries";
import Countryimage from "../assets/image/countries.svg";

const Deliverycountries2 = () => {
  return (
    <div className="deliver-country">
      <div className="country-picture">
        <img src={Countryimage} alt="" />
      </div>
      <h1 className="country-deliver">Countries where we deliver</h1>
      <div className="flex-countryname">
        <Deliverycountries countryname={"Spain"} />
        <Deliverycountries countryname={"Italy"} />
        <Deliverycountries countryname={"Ukarine"} />
        <Deliverycountries countryname={"Romania"} />
        <Deliverycountries countryname={"Georgia"} />
        <Deliverycountries countryname={"Portugal"} />
        <Deliverycountries countryname={"Poland"} />
        <Deliverycountries countryname={"Morocco"} />
        <Deliverycountries countryname={"Kazakhstan"} />
        <Deliverycountries countryname={"Croatia"} />
        <Deliverycountries countryname={"Kenya"} />
        <Deliverycountries countryname={"Côte D'Ivoire"} />
        <Deliverycountries countryname={"Serbia"} />
        <Deliverycountries countryname={"Moldova"} />
        <Deliverycountries countryname={"Uganda"} />
        <Deliverycountries countryname={"Kyrgystan"} />
        <Deliverycountries countryname={"Bosnia and Herzegovina"} />
        <Deliverycountries countryname={"Bulgaria"} />
        <Deliverycountries countryname={"Ghana"} />
        <Deliverycountries countryname={"Montenegro"} />
        <Deliverycountries countryname={"Slovenia"} />
        <Deliverycountries countryname={"Nigeria"} />
        <Deliverycountries countryname={"Armenia"} />
        <Deliverycountries countryname={"Andorra"} />
        <Deliverycountries countryname={"Tunisia"} />
      </div>
    </div>
  );
};

export default Deliverycountries2;
