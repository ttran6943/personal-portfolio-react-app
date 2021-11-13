import React from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles";
import "../App.css";

function Resume() {
  return (
    <StyleRoot>
      <div className="resume-page mx-4 my-3" style={animationStyles.fadeIn}>
        <div className="row">
          <div className="col-3 stack-list">
            <h3>Resume</h3>
            <h4>Front-End Stack</h4>
            <ul>
              <li>JavaScript ES6</li>
              <li>React.js</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <h4>Back-End Stack</h4>
            <ul>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Express</li>
              <li>Knex</li>
            </ul>
            <h4>Other</h4>
            <ul>
              <li>Mocha</li>
              <li>Chai</li>
              <li>Git</li>
              <li>Heroku</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}

export default Resume;
