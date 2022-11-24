import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuSvg } from "../../assets/Icons";
import NavBar from "./NavBar";
type Props = {};

const Nav = (props: Props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let oldValue = 0;
    let newValue = 0;
    if (newValue == 0) {
      setShow(true);
    }
    window.addEventListener("scroll", function (e) {
      // Get the new Value
      newValue = window.pageYOffset;

      //Subtract the two and conclude

      if (oldValue - newValue < 0) {
        setShow(false);
      } else if (oldValue - newValue > 0) {
        setShow(true);
      }
      console.log(newValue);

      // Update the old value
      oldValue = newValue;
    });
  }, []);
  console.log(show);
  return (
    <div>
      <nav className={`nav-desktop ${show ? "nada" : "dissapear"}`}>
        <MenuSvg fill={"#fff"} width={25} height={25}></MenuSvg>
        <p>Shinning</p>
        <NavBar mobile="no-mobile"></NavBar>
      </nav>
      <nav className={`nav-mobile`}>
        <p>Shinning</p>
        <NavBar mobile="mobile"></NavBar>
      </nav>
    </div>
  );
};

export default Nav;
