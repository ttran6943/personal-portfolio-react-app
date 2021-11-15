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
            <h5>Front-End Stack</h5>
            <ul>
              <li>JavaScript ES6</li>
              <li>React.js</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
            <h5>Back-End Stack</h5>
            <ul>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Express</li>
              <li>Knex</li>
            </ul>
            <h5>Other</h5>
            <ul>
              <li>Mocha</li>
              <li>Chai</li>
              <li>Git</li>
              <li>Heroku</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
        <button
          onClick={
            (Event = () =>
              window.open(
                "https://docs.google.com/document/d/1yNQiRzUNh3V6YQ8e_yM0tm3YADzh0sVw/edit?usp=sharing&ouid=101215602755905117141&rtpof=true&sd=true"
              ))
          }
          type="button"
          class="btn btn-secondary"
        >
          Link to Resume
        </button>
      </div>
    </StyleRoot>
  );
}

export default Resume;
