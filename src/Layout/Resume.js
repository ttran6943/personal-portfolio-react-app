import React from "react";


function Resume() {
  return (
    <div className="resume-page">
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
  );
}

export default Resume;
