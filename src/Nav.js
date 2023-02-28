import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  const navigate = useNavigate();

  return (
    <div className={`nav ${show && "nav_black"} `}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src={require("./580b57fcd9996e24bc43c529.png")}
          alt=""
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>
    </div>
  );
}

export default Nav;
