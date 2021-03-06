import React from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles";
import flashcards from "../imgs/flashcards.png";
import movies from "../imgs/welovemovies.png";
import thinkfulCupid from "../imgs/thinkfulcupid.png";
import pomodoro from "../imgs/pomodoro.PNG";
import grubdash from "../imgs/GrubDash.png";
import "../App.css";
import linkedButton from "../Components/buttonLink";
import resSys from "../imgs/resres-system-thumbnail.png";
import shoppingClone from "../imgs/shopping-thumbnail.png";

function Projects() {
  // const [frontIsShowing, setFrontIsShowing] = useState(true);

  // const handleToggle = () => {
  //   if (frontIsShowing === true) {
  //     setFrontIsShowing(false);
  //   } else {
  //     setFrontIsShowing(true);
  //   }
  // };

  const inProgressList = () => {
    return (
      <>
        {/* <h4>Projects in Progress</h4>
        <ul>
          <li>Periodic Tables: Restaurant Reservation System</li>
        </ul> */}
      </>
    );
  };

  const frontEndList = () => {
    return (
      <>
        <h5>Front-End Projects</h5>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <img
              className="col-12 stack-images"
              alt="flashcard app"
              src={flashcards}
            />
            <h5 className="thumbnail-text">Flashcard-o-Matic</h5>
            {linkedButton(
              "https://github.com/ttran6943/Flashcard-O-Matic",
              "GitHub Link"
            )}
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <img
              className="col-12 stack-images toShadow"
              alt="thinkfulCupid"
              src={thinkfulCupid}
            />
            <h5 className="thumbnail-text my-3">ThinkfulCupid</h5>
            <div className="row">
              <div className="col mx-3 my-3">
                {linkedButton(
                  "https://github.com/ttran6943/thinkfulCupid",
                  "GitHub Link"
                )}
              </div>
              <div className="col mx-3 my-3">
                {linkedButton(
                  "https://ttran6943.github.io/thinkfulCupid/",
                  "Live Demo"
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <img
              className="col-12 stack-images toShadow"
              alt="pomodoro app"
              src={pomodoro}
            />
            <h5 className="thumbnail-text my-3">Pomodoro Timer</h5>
            {linkedButton(
              "https://github.com/ttran6943/Pomodoro-Timer",
              "GitHub Link"
            )}
          </div>
        </div>
        <hr />
      </>
    );
  };

  const backEndList = () => {
    return (
      <>
        <div>
          <h5>Back-End Projects</h5>
          <div className="row backend">
            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
              <img
                className="col-12 stack-images"
                alt="weLoveMovies app"
                src={movies}
              />
              <h5 className="thumbnail-text">WeLoveMovies</h5>
              <div className="col mx-3">
                {linkedButton(
                  "https://ancient-temple-59879.herokuapp.com/",
                  "Live Demo"
                )}
              </div>
              <div className="col my-3">
                {linkedButton(
                  "https://github.com/ttran6943/WeLoveMovies-back-end",
                  "Github Link(Back-End)"
                )}{" "}
              </div>
              <div className="col my-3">
                {linkedButton(
                  "https://github.com/ttran6943/WeLoveMovies-front-end",
                  "Github Link(Front-End)"
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 my-3">
              <img
                className="col-12 stack-images"
                alt="grubdash project"
                src={grubdash}
              />
              <h5 className="thumbnail-text">GrubDash</h5>
              {linkedButton(
                "https://github.com/ttran6943/thinkful-grubdash",
                "GitHub Link"
              )}
            </div>
          </div>
          <hr />
        </div>
      </>
    );
  };
  //https://restaurant-res-sys-client.herokuapp.com/
  const fullStackList = () => {
    return (
      <>
        <h5>Full-Stack Projects</h5>
        <div className="row backend">
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <img
              className="col-12 stack-images toShadow"
              alt="restaurant-reservation-system"
              src={resSys}
            />
            <h5 className="thumbnail-text my-3">
              Periodic Tables: Restaurant Reservation System
            </h5>
            <div className="row">
              <div className="col">
                {linkedButton(
                  "https://restaurant-res-sys-client.herokuapp.com/",
                  "Live Demo"
                )}
              </div>
              <div className="col mx-3">
                {linkedButton(
                  "https://github.com/ttran6943/Periodic-Tables---Res-System",
                  "GitHub Link"
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 my-3">
            <img
              className="col-12 stack-images toShadow"
              alt="restaurant-reservation-system"
              src={shoppingClone}
            />
            <h5 className="thumbnail-text my-3">
              The Best Shop: Shopping Clone (IN PROGRESS)
            </h5>
            <div className="row">
              <div className="col">
                {linkedButton(
                  "https://the-best-store1.herokuapp.com/",
                  "Live Demo"
                )}
              </div>
              <div className="col mx-3">
                {linkedButton(
                  "https://github.com/ttran6943/The-Best-Store",
                  "GitHub Link"
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // const toggleButtons = () => {
  //   if (frontIsShowing === true) {
  //     return (
  //       <div class="btn-group mb-3" role="group" aria-label="Basic example">
  //         <button
  //           type="button"
  //           class="btn btn-secondary"
  //           onClick={handleToggle}
  //         >
  //           Front-End
  //         </button>
  //         <button type="button" class="btn btn-light" onClick={handleToggle}>
  //           Back-End
  //         </button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div class="btn-group mb-3" role="group" aria-label="Basic example">
  //         <button type="button" class="btn btn-light" onClick={handleToggle}>
  //           Front-End
  //         </button>
  //         <button
  //           type="button"
  //           class="btn btn-secondary"
  //           onClick={handleToggle}
  //         >
  //           Back-End
  //         </button>
  //       </div>
  //     );
  //   }
  // };

  return (
    <StyleRoot>
      <div className="projects-page mx-4 my-3" style={animationStyles.fadeIn}>
        <h3>Projects</h3>

        {inProgressList()}
        <div className="text-center">
          {/* {toggleButtons()} */}
          {/* {frontIsShowing == true ? frontEndList() : backEndList()} */}
          {frontEndList()}
          {backEndList()}
          {fullStackList()}
        </div>
      </div>
    </StyleRoot>
  );
}

export default Projects;
