import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://media-exp1.licdn.com/dms/image/C5603AQGYfQtPP8pXsw/profile-displayphoto-shrink_800_800/0/1607578054618?e=2147483647&v=beta&t=ktcObHIitJJClFfiQN1inn0dC4Lv6NxOgQxKOph3DJ4"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
