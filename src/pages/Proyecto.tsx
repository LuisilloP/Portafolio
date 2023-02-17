import { useLocation, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Keyboard, Autoplay } from "swiper";
import DBP from "../db/data-pages.json";
import ToolBoxes from "../components/ToolBoxes";
import { SwiperDefault } from "../components/SwiperDefault";
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
    <div className="margin-header-top min-height-div">
      {DBP.map((value, i) => {
        if (value.title == name) {
          return (
            <div className="proyect width-div-center " key={i}>
              <div className="proyect-title">
                <h1>Proyect {value.title}</h1>
              </div>
              <div className="proyect-images">
                <SwiperDefault
                  className="Swiper-Proyect-Select"
                  data={value.arrImg}
                />
              </div>
              <div className="proyect-about">
                <h2>Sobre el proyecto</h2>
                <p className="text-about">{value.about}</p>
              </div>
              <div className="proyect-lenguaje">
                <h2>Lenguaje y herramientas utilizadas</h2>
                <div className="ToolBox">
                  {" "}
                  <ToolBoxes icons={value.tools} />
                </div>
              </div>
              <div className="proyect-link">
                <h2>Enlaces</h2>
                <div className="link-page">
                  <h3>Pagina</h3>
                  {value.links.page.map((type, i) =>
                    type == "no" ? (
                      <p key={i}>
                        El link no esta diponible en estos momentos{" "}
                      </p>
                    ) : (
                      <a target="_blank" href={type} key={i}>
                        {type}
                      </a>
                    )
                  )}
                </div>
                <div className="link-repository">
                  <h3>Repositorio(s)</h3>
                  {value.links.repository.map((type, i) =>
                    type == "no" ? (
                      <p key={i}>
                        El link no esta diponible en estos momentos{" "}
                      </p>
                    ) : (
                      <a target="_blank" href={type} key={i}>
                        {type}
                      </a>
                    )
                  )}
                </div>
              </div>
              <div className="proyect-extra">
                {value.extra?.text !== undefined ? (
                  <div className="container-crud">
                    <h2>Extra</h2> <p>{value.extra?.text}</p>
                    <div className="container-swiper-extra">
                      <h2>Login</h2>
                      <SwiperDefault
                        className="extra-swiper"
                        data={value.extra.login}
                        delay={3000}
                      />
                    </div>
                    <div className="container-swiper-extra">
                      <h2>Creacion</h2>
                      <h3>casa ejemplo</h3>
                      <SwiperDefault
                        className="extra-swiper"
                        data={value.extra.create}
                        delay={4000}
                      />
                    </div>
                    <div className="container-swiper-extra">
                      <h2>Modificacion </h2>
                      <h3>parcelas doce / parcelas trece</h3>
                      <SwiperDefault
                        className="extra-swiper"
                        data={value.extra.update}
                        delay={4500}
                      />
                    </div>
                    <div className="container-swiper-extra">
                      <h2>Eliminacion</h2>
                      <h3>parcelas trece</h3>
                      <SwiperDefault
                        className="extra-swiper"
                        data={value.extra.dele}
                        delay={4000}
                      />
                    </div>
                  </div>
                ) : (
                  <p>{value.extra?.text}</p>
                )}
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
