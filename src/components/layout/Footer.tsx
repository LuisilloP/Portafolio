import React from "react";
import NavBar from "./NavBar";
import linkedin from "/images/social/linkedin.png";
import whatsapp from "/images/social/whatsapp.png";
import github from "/images/social/github.png";
import instagram from "/images/social/instagram.png";
import { NavLink } from "react-router-dom";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="logo-nav-social">
        {" "}
        <p className="logo-min">Shinning</p>
        <NavBar mobile="no-mobile"></NavBar>
        <div className="social-media">
          <a href="">
            <img className="img-social icon-linkedin" src={linkedin}></img>
          </a>
          <a href="https://github.com/LuisilloP/Portafolio" target="_blank">
            <img className="img-social icon-github" src={github}></img>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img className="img-social icon-ig" src={instagram}></img>
          </a>
          <a
            href="https://wa.me/974022976?text=Hola%20si%20estas%20interesado%20en%20mis%20proyectos%20hablame"
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
