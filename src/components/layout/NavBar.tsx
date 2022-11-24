import React from "react";

type Props = {
  mobile: string;
};

const NavBar = ({ mobile }: Props) => {
  return (
    <ul className={mobile}>
      <li>Inicio</li>
      <li>Habilidades</li>
      <li>Proyectos</li>
      <li className={mobile}>
        <button className="btn-contact">Contacto </button>
      </li>
    </ul>
  );
};

export default NavBar;
