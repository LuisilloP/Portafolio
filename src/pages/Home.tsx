import React from "react";
import Skill from "../components/Skill";
import ImagePage from "../../public/images/SkillPage.png";
import { ReactSvg, HtmlSvg, SassSvg, JavaSvg, NodeSVg } from "../assets/Icons";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="home">
      <div className="img-principal center-horizontal-vertical ">
        <div>
          <h2 className="logo-text">SHINING</h2>
        </div>
      </div>
      <div className="divider"></div>
      <div className="about-me"></div>
      <div className="divider"></div>
      <div className="skill-container">
        <h2>Habilidades</h2>
        <div className="skills">
          <Skill
            title="HTML-SCSS-JAVASCRIP"
            text="Manejo a buen nivel de la estructura basica del desarrollo web,la experiencia adquirida proviene de mi formacion como analista programador."
            img={[<HtmlSvg />, <JavaSvg />, <SassSvg />]}
          ></Skill>
          <Skill
            title="REACT"
            text="El uso de react se refleja en este mismo proyecto, usando a su misma vez Typescrip y la herramienta vite para"
            img={[<ReactSvg />]}
          ></Skill>
          <Skill
            title="NODE JS"
            text="En node JS he implementado pequeñas APIREST encargadas de cargar imagenes,CRUD de datos para almacenamiento de base de datos y la gestion de formularios"
            img={[<NodeSVg />]}
          ></Skill>
        </div>
      </div>
      <div className="divider"></div>
      <div className="my-proyects">
        <h2>Mis Proyectos</h2>
        <div className="skill-shot">
          <h2>Skill Shot</h2>
          <img src={ImagePage}></img>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Home;
