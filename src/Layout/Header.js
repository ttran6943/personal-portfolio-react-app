import Radium from "radium";
import React from "react";
import "../App.css";
import animationStyles from "../Components/animationStyles.js";
import { StyleRoot } from "radium";

function Header() {
  return (
    <>
      <StyleRoot>
        <div className="Header mx-4 my-3" style={animationStyles.fadeIn}>
          <h1>Tony Tran</h1>
          <h3>Software Developer</h3>
        </div>
        <div className="navigation-bar" style={animationStyles.fadeIn}>
          <nav class="navbar navbar-light bg-light">
            <div className="mx-2">
              <a class="navbar-brand mx-3" href="/">
                Home
              </a>
              <a class="navbar-brand mx-3" href="about">
                About Me
              </a>
              <a class="navbar-brand mx-3" href="projects">
                Projects
              </a>
              <a class="navbar-brand mx-3" href="resume">
                Resume
              </a>
              <a class="navbar-brand mx-3" href="contact">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </StyleRoot>
    </>
  );
}

export default Header;
