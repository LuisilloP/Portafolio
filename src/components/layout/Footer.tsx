import React from "react";
import NavBar from "./NavBar";
import linkedin from "/images/social/linkedin.png";
import whatsapp from "/images/social/whatsapp.png";
import github from "/images/social/github.png";
import instagram from "/images/social/instagram.png";
import { NavLink } from "react-router-dom";
import MenuMobile from "../../hooks/MenuMobile";
type Props = {};

const Footer = (props: Props) => {
  const { menuMobile, SetmenuMobile } = MenuMobile();
  return (
    <div className="footer">
      <div className="logo-nav-social">
        {" "}
        <p className="logo-min">Shining</p>
        <NavBar mobile="no-mobile" SetmenuMobile={SetmenuMobile}></NavBar>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/luis-araya-programer">
            <img className="img-social icon-linkedin" src={linkedin}></img>
          </a>
          <a href="https://github.com/LuisilloP/Portafolio" target="_blank">
            <img className="img-social icon-github" src={github}></img>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img className="img-social icon-ig" src={instagram}></img>
          </a>
          <a
            href="https://wa.me/56974022976?text=Hola%20Estoy%20Interesado"
            target="_blank"
          >
            <img className="img-social icon-wsp" src={whatsapp}></img>
          </a>
        </div>
      </div>
      <div className="divider-space"></div>
      <div className="terms-politic">
        <p> &copy; 2023 Derechos Shinning</p>
        <NavLink to="/Privacidad">
          <p>Politica de privacidad</p>
        </NavLink>
        <NavLink to="/Terminos">
          <p>Terminos y condiciones</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
