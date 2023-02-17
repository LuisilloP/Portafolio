import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

type Props = {
  mobile: string;
  SetmenuMobile: React.Dispatch<React.SetStateAction<string>>;
};

const NavBar = ({ mobile, SetmenuMobile }: Props) => {
  const path = useLocation().pathname;
  const close = () => {};
  const navigate = useNavigate();
  const htmlClass = document.querySelector("html");
  const scrollTo = (ubication: string) => {
    scroller.scrollTo(ubication, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -75,
    });
    SetmenuMobile("novisible");
    htmlClass?.classList.remove("hidden-y");
  };
  const beforeScrollTo = async (ubication: string) => {
    await close();
    await navigate("/");
    await scroller.scrollTo(ubication, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -75,
    });
    await SetmenuMobile("novisible");
    htmlClass?.classList.remove("hidden-y");
  };
  return (
    <ul className={mobile}>
      <li>
        {path == "/" ? (
          <a onClick={() => scrollTo("img-principal")}>Inicio</a>
        ) : (
          <a onClick={() => beforeScrollTo("img-principal")}>Inicio</a>
        )}
      </li>
      <li>
        {path == "/" ? (
          <a onClick={() => scrollTo("skill-container")}>Habilidades</a>
        ) : (
          <a onClick={() => beforeScrollTo("skill-container")}>Habilidades</a>
        )}
      </li>
      <li>
        {path == "/" ? (
          <a onClick={() => scrollTo("my-proyects")}>Proyectos</a>
        ) : (
          <a onClick={() => beforeScrollTo("my-proyects")}>Proyectos</a>
        )}
      </li>
      {}
      <li className={mobile}>
        <NavLink
          to="/Contacto"
          onClick={() => {
            SetmenuMobile("novisible");
            htmlClass?.classList.remove("hidden-y");
          }}
        >
          {mobile == "no-mobile" ? (
            <>Contacto</>
          ) : (
            <button
              className="btn-contact"
              onClick={() => {
                SetmenuMobile("novisible");
                htmlClass?.classList.remove("hidden-y");
              }}
            >
              Contacto{" "}
            </button>
          )}
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
