import React from "react";
import Radium from "radium";
import flashcards from "../imgs/flashcards.png";
import movies from "../imgs/welovemovies.png";
import thinkfulCupid from "../imgs/thinkfulCupid.png";

function Projects() {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <h3>Front-End:</h3>
      {/* <ul>
        <li>Flashcard-o-Matic</li>
        <li>ThinkfulCupid</li>
        <li>Pomodoro Timer</li>
        <li>Decoder Ring</li>
      </ul>
      <h3>Back-End:</h3>
      <ul>
        <li>WeLoveMovies</li>
        <li>GrubDash</li>
      </ul> */}
      
        <div className="row">
          <div className="col-4">
            <img className="col-12 stack-images" src={flashcards} />
            <p>Flashcard-o-Matic</p>
          </div>
          <div className="col-4">
            <img className="col-12 stack-images" src={movies} />
            <p>WeLoveMovies</p>
          </div>
          <div className="col-4">
            <img className="col-12 stack-images" src={thinkfulCupid} />
            <p>ThinkfulCupid</p>
          </div>
        </div>
      </div>
  );
}

export default Projects;
