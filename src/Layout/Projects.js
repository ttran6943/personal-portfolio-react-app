import React from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles";
import flashcards from "../imgs/flashcards.png";
import movies from "../imgs/welovemovies.png";
import thinkfulCupid from "../imgs/thinkfulcupid.png";
import pomodoro from "../imgs/pomodoro.PNG";
import { useState } from "react";
import grubdash from "../imgs/GrubDash.png";
import "../App.css";

function Projects() {
  const [frontIsShowing, setFrontIsShowing] = useState(true);

  const handleToggle = () => {
    if (frontIsShowing === true) {
      setFrontIsShowing(false);
    } else {
      setFrontIsShowing(true);
    }
  }

  const frontEndList = () => {
    return (
      <div className="row">
        <div className="col-4">
          <img className="col-12 stack-images" src={flashcards} />
          <p className="thumbnail-text">Flashcard-o-Matic</p>
        </div>
        <div className="col-4">
          <img className="col-12 stack-images" src={thinkfulCupid} />
          <p className="thumbnail-text">ThinkfulCupid</p>
        </div>
        <div className="col-4">
          <img className="col-12 stack-images" src={pomodoro} />
          <p className="thumbnail-text">Pomodoro Timer</p>
        </div>
      </div>
    );
  }

  const backEndList = () => {
    return (
      <div className="row backend">
        <div className="col-4">
          <img className="col-12 stack-images" src={movies} />
          <p className="thumbnail-text">WeLoveMovies</p>
        </div>
        <div className="col-4">
          <img className="col-12 stack-images" src={grubdash} />
          <p className="thumbnail-text">GrubDash</p>
        </div>
      </div>
    );
  }

  const toggleButtons = () => {
    if (frontIsShowing === true) {
      return (
        <div class="btn-group mb-3" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" onClick={handleToggle}>
            Front-End
          </button>
          <button
            type="button"
            class="btn btn-light"
            onClick={handleToggle}
          >
            Back-End
          </button>
        </div>
      );
    } else {
      return (
        <div class="btn-group mb-3" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-light"
            onClick={handleToggle}
          >
            Front-End
          </button>
          <button type="button" class="btn btn-secondary" onClick={handleToggle}>
            Back-End
          </button>
        </div>
      );
    }
  }

  return (
    <StyleRoot>
      <div className="projects-page mx-4 my-3">
        <h3 style={animationStyles.fadeIn}>Projects</h3>
        <div className="text-center" style={animationStyles.fadeIn}>{toggleButtons()}
        {frontIsShowing == true ? frontEndList() : backEndList()}
        </div>
      </div>
    </StyleRoot>
  );
}

export default Projects;
