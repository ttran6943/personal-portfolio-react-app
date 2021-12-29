import React, { useEffect } from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles";
import "../App.css";
import corgibutt from "../imgs/corgibutt.jfif";
import homegif from "../imgs/homepage.gif";
import Typing from "react-typing-animation";
import Aos from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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

      //PLACEHOLDER
      <div>
        <p data-aos="fade-up">1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </>
  );
}

export default HomePage;
