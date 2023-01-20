import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  mobile: string;
};

const NavBar = ({ mobile }: Props) => {
  return (
    <ul className={mobile}>
      <NavLink to="/">Inicio </NavLink>
      <NavLink to="/Habilidades">Habilidades </NavLink>
      <NavLink to="/Proyectos">Proyectos </NavLink>
      <li className={mobile}>
        <NavLink to="/Contacto">
          <button className="btn-contact">Contacto </button>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
