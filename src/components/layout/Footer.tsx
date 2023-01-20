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
          <a>
            <img className="img-social" src={linkedin}></img>
          </a>
          <a>
            <img className="img-social" src={github}></img>
          </a>
          <a>
            <img className="img-social" src={instagram}></img>
          </a>
          <a>
            <img className="img-social" src={whatsapp}></img>
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
