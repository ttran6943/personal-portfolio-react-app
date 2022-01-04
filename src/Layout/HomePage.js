import React, { useEffect } from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles";
import "../App.css";
import corgibutt from "../imgs/corgibutt.jfif";
import homegif from "../imgs/homepage.gif";
import Typing from "react-typing-animation";


function HomePage() {

  const AnimatedTyping = () => (
    <Typing>
      <h2>Hey there! Let's connect!</h2>
    </Typing>
  );

  return (
    <>
      <StyleRoot>
        <div className="home-greet" style={animationStyles.fadeIn}>
          {AnimatedTyping()}
          <img class="col-5" src={homegif} />
        </div>
      </StyleRoot>
    </>
  );
}

export default HomePage;
