import React, { useEffect } from "react";
import "../App.css";
import animationStyles from "../Components/animationStyles.js";
import { StyleRoot } from "radium";
import BurgerMenu from "../Components/BurgerMenu";

function Header() {
  React.useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);
  return (
    <>
      <div className="App">
        <div className="col-3">
          <BurgerMenu />
        </div>
      </div>
      <StyleRoot>
        <div
          className="Header mobile-header mx-4 my-3"
          style={animationStyles.fadeIn}
        >
          <h1 className="Name">Tony Tran</h1>
          <h3 className="Subname">Software Developer</h3>
          <hr />
        </div>
      </StyleRoot>
    </>
  );
}

export default Header;
