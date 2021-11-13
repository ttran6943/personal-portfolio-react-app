import React from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles"; 
import "../App.css";
import corgibutt from "../imgs/corgibutt.jfif";


function HomePage() {
  return (
    <StyleRoot>
      <div className="home-greet" style={animationStyles.fadeIn}>
        <h2 class="greeting-text">Hey there! Let's connect!</h2>
        <img class="col-5" src={corgibutt}/>
      </div>
    </StyleRoot>
  );
}

export default HomePage;
