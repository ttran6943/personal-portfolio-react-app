import React from "react";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <div className="resume-page">
      <h3>Contact Me</h3>
      <p>
        Please do not hesitate to reach out to me! I am looking forward to
        connecting with you.
      </p>
      <div className="contact-links">
        <a href="#">LinkedIn</a>
        <a href="#">Email</a>
        <a href="#">GitHub</a>
      </div>
    </div>
  );
}

export default ContactPage;
