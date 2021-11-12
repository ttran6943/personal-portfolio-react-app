import Radium from "radium";
import { fadeIn } from "react-animations";

const styles = {
    fadeIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
  };

export default styles;