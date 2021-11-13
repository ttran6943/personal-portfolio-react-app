import Radium from "radium";
import { fadeIn, fadeOut } from "react-animations";

const styles = {
    fadeIn: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
    fadeOut: {
      animation: "x 1s",
      animationName: Radium.keyframes(fadeOut, "fadeOut"),
    },
  };

export default styles;