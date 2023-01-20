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
    <div className="ToolBox">
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
        return null;
      })}
    </div>
  );
};

export default ToolBoxes;
