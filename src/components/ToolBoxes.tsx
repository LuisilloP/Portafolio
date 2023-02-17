import {
  ReactSvg,
  HtmlSvg,
  SassSvg,
  JavaSvg,
  NodeSVg,
  ViteSvg,
  TypescripSvg,
  MongoSvg,
  MaterialUiSvg,
  FigmaSvg,
  GitHubSvg,
  CSharpSvg,
  MysqlSvg,
  SqlServerSvg,
} from "../assets/Icons";
import AOS from "aos";
import { useEffect } from "react";
interface Props {
  icons: Array<string>;
}

const ToolBoxes = ({ icons }: Props) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {icons.map((val, i) => {
        if (val == "react") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <ReactSvg />
            </div>
          );
        }
        if (val == "javascript") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <JavaSvg />
            </div>
          );
        }
        if (val == "sass") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <SassSvg />
            </div>
          );
        }
        if (val == "vite") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <ViteSvg />
            </div>
          );
        }
        if (val == "typescript") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <TypescripSvg key={i} />
            </div>
          );
        }
        if (val == "nodeJs") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <NodeSVg />
            </div>
          );
        }
        if (val == "mongoDb") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <MongoSvg />
            </div>
          );
        }
        if (val == "materialUi") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <MaterialUiSvg />
            </div>
          );
        }
        if (val == "figma") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <FigmaSvg />
            </div>
          );
        }
        if (val == "gitHub") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <GitHubSvg />
            </div>
          );
        }
        if (val == "gitHub") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <GitHubSvg />
            </div>
          );
        }
        if (val == "c#") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <CSharpSvg />
            </div>
          );
        }
        if (val == "mysql") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <MysqlSvg />
            </div>
          );
        }
        if (val == "sqlserver") {
          return (
            <div
              className="box"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1200"
              key={i}
            >
              <SqlServerSvg />
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default ToolBoxes;
