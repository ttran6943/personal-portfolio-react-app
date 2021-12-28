import React from "react";
import animationStyles from "../Components/animationStyles.js";
import { StyleRoot } from "radium";
import corgilmao from "../imgs/corgilmao.jpg";
import "../App.css";
import headshot from "../imgs/headshot.jpeg";

function AboutMe() {
  const aboutMeText = () => {
    return (
      <div className="row" style={animationStyles.fadeIn}>
        <div className="col-lg-7 col-md-7 col-sm-6 about-me mx-4 my-3">
          <h3>About Me</h3>
          <p>
            Hi there! My name is Tony and I am a full-stack software developer
            based in Los Angeles, California.
          </p>
          <p>
            I am UCLA Bruin pursuing a degree in Geology, B.S. While I share
            interest in the earth and its mechanisms, I realize I have also
            developed a passion for coding. I had the privilege at UCLA to use
            C++ and Python in various applications, such as simulating kinematic
            geologic sequences and structures, from which I found my interest in
            programming. My goal is to one day be a part of a life-changing
            programming project for the bettering of our daily lives.
          </p>
          <p>
            I am also a Thinkful Software Engineering Immersion Bootcamp
            graduate. At Thinkful, I had the opportunity to push my programming
            skills to the limit and develop JavaScript-based real-world
            applications that I would never have thought I would be able to do
            before. As a recent graduate, I am driven to learn more. Currently,
            I am furthering my full-stack development capabilities with
            JavaScript as well as learning more of Python.
          </p>
          <p>Aside from Geology and coding, some other of my interests are:</p>
          <ul>
            <li>Hiking and camping</li>
            <li>
              Astrophotography, portrait photography, and landscape photography
            </li>
            <li>Volunteering and community service</li>
            <li>Spending quality time with family and friends</li>
          </ul>
          <h4>My goals are:</h4>
          <ul>
            <li>
              Working on software for companies who share a goal of bettering
              our daily lives
            </li>
            <li>Building aesthetic and well-functioning websites</li>
            <li>Pushing my coding abilities to limit</li>
          </ul>
          <h4>Miscellaneous: Favorites!</h4>
          <h5>Songs</h5>
          <ul>
            <li>Lay It Down - Illenium, Krewella, SLANDER</li>
            <li>Returning to You - Seven Lions, Andrew Bayer, Alison May</li>
          </ul>
          <h5>Movies</h5>
          <ul>
            <li>Inception</li>
            <li>Shang Chi</li>
            <li>A Beautiful Mind</li>
          </ul>
        </div>
        <img
          className="col-lg-4 col-md-3 col-sm-4 my-4 mx-3"
          src={headshot}
          height="100%"
        />
      </div>
    );
  };

  return <StyleRoot>{aboutMeText()}</StyleRoot>;
}

export default AboutMe;
