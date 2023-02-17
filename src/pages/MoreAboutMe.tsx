import React from "react";
import ToolBoxes from "../components/ToolBoxes";
import ImageProgramer from "../assets/programing.jpg";
type Props = {};

const MoreAboutMe = (props: Props) => {
  return (
    <div className=" more-about-me margin-header-top min-height-div">
      <h1>Mas sobre mi</h1>
      <div className="iam-image">
        <div>
          <img src={ImageProgramer} className="image-programer"></img>
        </div>
        <div>
          <h2>¿ Quien soy? 👤</h2>
          <p>
            Soy una persona de 25 años que estudio programación y le gusta la
            programación. me gusta aprender de manera autodidacta, hacer las
            cosas de la manera correcta y perfeccionista en ciertos sentidos. Se
            que tengo potencial para explotar y estoy dispuesto a darlo todo
            para explotarlo y poder demostrar mis habilidades de una mayor
            manera en la programación.
          </p>
        </div>
      </div>
      <div>
        <h2>Estudios 🎓</h2>
        <p>
          Son una parte importante dentro de lo que es el desarrollo personal y
          profesional ya que se adquieren técnicas y se pulen las que ya se
          poseen. Dentro de este mismo campo puedo decir que me titulé como:
          técnico Analista Programador en lP de santo tomas que tiene un periodo
          de estudio de 2.5 años, en este mismo obtuve los conocimientos básicos
          de la programación, así como los mas complejos, destacando las clases
          de: programación orientada a objetos, programación web, programación
          en C#, programación .NET y bases de datos en las cuales se utilizaron
          bases de datos SQL que en este caso fueron MYSQL y SQL server. Así
          como obtuve esa formación académica también realicé un curso de
          JavaScript para reforzar conocimientos en el cual me destaque dentro
          de los 10 mejores obteniendo un puntaje perfecto en las pruebas.
        </p>
      </div>
      <div>
        <h2>Lenguajes utilizados y aprendidos,herramientas y librerias 📚</h2>
        <h3>Lenguajes</h3>
        <div className="ToolBox ToolAbout">
          <ToolBoxes icons={["c#", "javascript", "typescript", "sass"]} />
        </div>
        <h3>Base de datos</h3>
        <div className="ToolBox ToolAbout">
          <ToolBoxes icons={["mongoDb", "mysql", "sqlserver"]} />
        </div>
        <h3>Librerias</h3>
        <div className="ToolBox ToolAbout">
          <ToolBoxes icons={["materialUi", "react"]} />
        </div>
        <h3>Herramientas</h3>
        <div className="ToolBox ToolAbout">
          <ToolBoxes icons={["gitHub", "vite", "figma"]} />
        </div>
      </div>
      <div>
        <h2>Herramientas</h2>
      </div>
    </div>
  );
};

export default MoreAboutMe;
