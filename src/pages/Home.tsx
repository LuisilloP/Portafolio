import { useState, useEffect } from "react";
import Skill from "../components/Skill";
import ImagePageSkill from "/images/skillshot/SkillPage.png";
import ImagePageProperty from "/images/property/PropertyPage.png";
import ImagePageGamershop from "/images/gamershop/GamershopPage.png";
import ImageAvatar from "/images/avatar.png";
import { ReactSvg, HtmlSvg, SassSvg, JavaSvg, NodeSVg } from "../assets/Icons";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
type Props = {};

const Home = (props: Props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="home">
      <div className="img-principal center-horizontal-vertical ">
        <div>
          <h2 className="logo-text">SHINING</h2>
        </div>
      </div>
      <div className="divider">
        <div className="circle-layer"></div>
      </div>
      <div className="about-me">
        <h2 className="text-important">Sobre Mi</h2>
        <div className="about">
          <div className="text-about">
            <h2>Luis Araya</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              esse, fugit ipsa dolore officiis mollitia similique ad, sunt
              dolores, ab est soluta labore? Excepturi magni doloribus obcaecati
              mollitia libero quia! Neque sapiente saepe, dolorem hic, eum
              dolorum, impedit beatae repudiandae maxime eligendi cum nulla
              numquam et facere. Deserunt quia reprehenderit officiis nam atque
              hic, repudiandae debitis natus voluptatem nesciunt accusantium.
            </p>
          </div>
          <div className="img-about">
            <img className="img-avatar" src={ImageAvatar}></img>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="skill-container">
        <h2 className="text-important">Habilidades</h2>
        <div className="skills">
          <Skill
            title="HTML-SCSS-JAVASCRIP"
            text="Manejo a buen nivel de la estructura basica del desarrollo web,la experiencia adquirida proviene de mi formacion como analista programador. y la plactica aplciada en cada uno de mis proyectos."
            img={[<HtmlSvg />, <JavaSvg />, <SassSvg />]}
            key={1}
          ></Skill>
          <Skill
            title="REACT"
            text="El uso de React se refleja en este mismo proyecto, usando a su misma vez Typescrip y la herramienta vite para hacer la compilación  y reducir su tamaño."
            img={[<ReactSvg />]}
            key={2}
          ></Skill>
          <Skill
            title="NODE JS"
            text="En node JS he implementado pequeñas APIREST encargadas de cargar imágenes, CRUD de datos para almacenamiento en base de datos y la gestion de formularios."
            img={[<NodeSVg />]}
            key={3}
          ></Skill>
        </div>
        <div className="container-btn-about">
          <NavLink to="/Habilidades">
            <button className="btn-more">Mas sobre mis habilidades</button>
          </NavLink>
        </div>
      </div>
      <div className="divider"></div>
      <div className="my-proyects">
        <h2 className="text-important">Mis Proyectos</h2>
        <div className="proyects">
          <NavLink
            to={`/Proyecto/${"propiedades"}`}
            state={{ name: "Propiedades" }}
            data-aos="fade-left"
          >
            <div className="propiedades font-color-style">
              <h2>Propiedades</h2>
              <img src={ImagePageProperty}></img>
            </div>
          </NavLink>
          <NavLink
            to={`/Proyecto/${"skillshot"}`}
            state={{ name: "Skillshot" }}
            data-aos="fade-right"
          >
            <div className="skill-shot font-color-style">
              <h2>Skill Shot</h2>
              <img src={ImagePageSkill}></img>
            </div>
          </NavLink>

          <NavLink
            to={`/Proyecto/${"gamershop"}`}
            state={{ name: "GamerShop" }}
            data-aos="fade-left"
          >
            <div className="gamershop font-color-style">
              <h2>Gamershop</h2>
              <img src={ImagePageGamershop}></img>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="divider"></div>
      <div className="spacer-svg wave-layer"></div>
    </div>
  );
};

export default Home;
