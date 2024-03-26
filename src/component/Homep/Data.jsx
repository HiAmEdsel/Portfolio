import React from "react";
import Svg from "./nameicon.svg";
import Svg1 from "./buttonicon.svg";
import "./Data.css";

function Data() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Edsel Nombrado{" "}
        <img src={Svg} alt="..." style={{ width: "30px", height: "30px" }} />{" "}
      </h1>
      <h3 className="home__subtitle">Developer </h3>
      <p className="home__description">
        I'm a software engineer and a Web Developer base in Philippines, and I'm
        very passionate and dedicated to my work.
      </p>

      <a href="#about" className="button1 button--flex">
        Explore Details{" "}
        <img src={Svg1} alt="..." style={{ width: "24px", height: "24px" }} />
      </a>
    </div>
  );
}

export default Data;
