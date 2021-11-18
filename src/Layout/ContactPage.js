import React from "react";
import { StyleRoot } from "radium";
import animationStyles from "../Components/animationStyles";
import "../App.css";

function ContactPage() {
  const displayContactButtons = () => {
    return (
      <div className="contact-links">
        <button
          onClick={
            (Event = () =>
              window.open("https://www.linkedin.com/in/tonyltran/"))
          }
          type="button"
          class="btn btn-secondary"
        >
          LinkedIn
        </button>
        <button
          onClick={(Event = () => window.open("https://github.com/ttran6943"))}
          type="button"
          class="btn btn-secondary mx-2"
        >
          GitHub
        </button>
      </div>
    );
  };

  const contactText = () => {
    return (
      <>
        <h3>Contact Me</h3>
        <p>
          Please do not hesitate to reach out to me! I am looking forward to
          connecting with you.
        </p>
        <p>Email: tranltony8@gmail.com</p>
        <p>Phone: 858.216.6128</p>
      </>
    );
  };

  return (
    <StyleRoot>
      <div className="resume-page col mx-4 my-4" style={animationStyles.fadeIn}>
        {contactText()}
        {displayContactButtons()}
      </div>
    </StyleRoot>
  );
}

export default ContactPage;
