import React from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles";
import "../App.css";
import resume from "../documents/resume.pdf";
import linkedButton from "../Components/buttonLink";

const resumeURL =
  "https://docs.google.com/document/d/1yNQiRzUNh3V6YQ8e_yM0tm3YADzh0sVw/edit?usp=sharing&ouid=101215602755905117141&rtpof=true&sd=true";

function Resume() {
  const workList = () => {
    return (
      <>
        <h3>Work Experience</h3>
        <h5>InvestCloud (Apr 2022 - )</h5>
        <ul>
          <li>
            Jr. Front End Developer
          </li>
        </ul>
      </>
    );
  };

  const stackList = () => {
    return (
      <>
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
      </>
    );
  };

  const embeddedPdf = () => {
    return (
      <object
        data={resume}
        type="application/pdf"
        width="100%"
        height="560"
        className="col-lg-8 col-md-8 col-sm-12 mx-3 my-3"
      >
        <p>
          Resume link:
          https://docs.google.com/document/d/1yNQiRzUNh3V6YQ8e_yM0tm3YADzh0sVw/edit?usp=sharing&ouid=101215602755905117141&rtpof=true&sd=true
          <a href="https://docs.google.com/document/d/1yNQiRzUNh3V6YQ8e_yM0tm3YADzh0sVw/edit?usp=sharing&ouid=101215602755905117141&rtpof=true&sd=true"></a>
        </p>
      </object>
    );
  };

  return (
    <StyleRoot>
      <div className="resume-page mx-4 my-3" style={animationStyles.fadeIn}>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 stack-list">
            {workList()}
            {stackList()}
            {linkedButton(resumeURL, "Link to Resume")}
          </div>
          {embeddedPdf()}
        </div>
      </div>
    </StyleRoot>
  );
};

export default Resume;
