import React from "react";
import Me from "./aboutpic.jpg";
import "./About.css";

function About() {
  return (
    <>
      <section id="about"></section>
      <section className="container">
        <div className="about-container">
          <div className="pic-container">
            <img src={Me} alt="Maged" />
          </div>

          <div className="about-text">
            <div className="about-header">
              <h1 className="title">About Me</h1>
            </div>
            <p>
              I'm Edsel, graduated as BS-IT student, on the lookout for new
              opportunities to learn and grow as both a person and a developer,
              I enjoy building websites and application for learning new
              technologies or which ever new born tools and framework because
              there's always a new one!
              <br />
              <br />I spend my free time with family and friends, listening to
              music or playing games.
            </p>

            <a href="#about" className="btn">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
