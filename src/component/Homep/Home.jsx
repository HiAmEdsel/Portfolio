import React from "react";
import "./Home.css";
import Social from "./Social.jsx";
import Data from "./Data.jsx";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container ">
        <div className="home__content grid2">
          <Social />

          <div className="home__img"></div>
          <Data />
        </div>
      </div>
    </section>
  );
}

export default Home;
