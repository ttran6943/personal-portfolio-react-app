import React from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles"; 


function HomePage() {
  return (
    <StyleRoot>
      <div className="home-greet" style={animationStyles.fadeIn}>
        <h2>Hey there! Let's connect!</h2>
      </div>
    </StyleRoot>
  );
}

export default HomePage;
