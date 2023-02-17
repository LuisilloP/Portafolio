import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const navigate = useNavigate();
  export const ScrollerToUS = (ubication: string,) => {
    scroller.scrollTo(ubication, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -75,
    });
    
  };

  export const BeforeScrollToUS = async (ubication: string) => {
    await close();
    await navigate("/");
    await scroller.scrollTo(ubication, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -75,
    });
  
  };