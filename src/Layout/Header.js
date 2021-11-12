import React from "react";

function Header() {
  return (
    <>
      <div className="Header">
        <h1>Tony Tran</h1>
        <h2>Software Developer</h2>
      </div>
      <div className="navigation-bar">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="/">
            Home
          </a>
          <a class="navbar-brand" href="about">
            About Me
          </a>
          <a class="navbar-brand" href="projects">
            Projects
          </a>
          <a class="navbar-brand" href="resume">
            Resume
          </a>
          <a class="navbar-brand" href="contact">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}

export default Header;
