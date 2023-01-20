import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Keyboard, Autoplay } from "swiper";
import DBP from "../db/data-pages.json";
import ToolBoxes from "../components/ToolBoxes";
type Props = {};
const ArrImg = [
  "https://i.postimg.cc/Y2sNM2jH/Propiedades-Test.png",
  "https://i.postimg.cc/Y2sNM2jH/Propiedades-Test.png",
];
const Proyecto = (props: Props) => {
  const PassName = useLocation().state;
  const { name } = PassName;

  console.log(DBP[0]);
  return (
    <div className="padding-header min-height-div">
      {DBP.map((value, i) => {
        if (value.title == name) {
          return (
            <div className="proyect width-div-center " key={i}>
              <div className="proyect-title">
                <h1>Proyect {value.title}</h1>
              </div>
              <div className="proyect-images">
                <Swiper
                  // bloquea movimiento en pc cssMode={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Keyboard, EffectFade, Autoplay]}
                  //effect="fade"
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  className="Swiper-Proyect-Select"
                  navigation={true}
                >
                  {value.arrImg.map((img, i) => (
                    <SwiperSlide key={img + i}>
                      <img src={img} id={img} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="proyect-about">
                <h2>Sobre el proyecto</h2>
                <p className="text-about">{value.about}</p>
              </div>
              <div className="proyect-lenguaje">
                <h2>Lenguaje y herramientas utilizadas</h2>
                <ToolBoxes icons={value.tools} />
              </div>
              <div className="proyect-extra">
                <p></p>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Proyecto;
