import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuSvg } from "../../assets/Icons";
import NavBar from "./NavBar";
import MenuMobile from "../../hooks/MenuMobile";
type Props = {};

const Nav = (props: Props) => {
  const [show, setShow] = useState(false);
  const { menuMobile, SetmenuMobile } = MenuMobile();
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
      // console.log(newValue);

      // Update the old value

      oldValue = newValue;
    });
  }, []);
  //console.log(show);
  const dropDownMenu = () => {
    const htmlClass = document.querySelector("html");
    if (menuMobile == " " || menuMobile == "novisible") {
      SetmenuMobile("visible");
      htmlClass?.classList.add("hidden-y");
    } else {
      SetmenuMobile("novisible");
      htmlClass?.classList.remove("hidden-y");
    }
    console.log(menuMobile);
  };
  return (
    <div>
      <nav className={`nav-desktop ${show ? "nada" : "dissapear"}`}>
        <NavLink to="/">
          <p className="logo-min">Shining</p>
        </NavLink>
        <NavBar mobile="mobile" SetmenuMobile={SetmenuMobile}></NavBar>
      </nav>
      <nav className={`nav-mobile ${show ? "nada" : "dissapear"}`}>
        <a onClick={dropDownMenu} className="menu-svg">
          <MenuSvg fill={"#fff"} width={25} height={25}></MenuSvg>
        </a>
        <NavLink className="logo-min" to="/">
          <p>Shining</p>
        </NavLink>
      </nav>
      <div
        className={`menu-mobile ${
          menuMobile == " "
            ? " "
            : menuMobile == "visible"
            ? "active"
            : "disabled"
        }`}
      >
        <NavBar mobile="no-mobile" SetmenuMobile={SetmenuMobile}></NavBar>
      </div>
    </div>
  );
};

export default Nav;
