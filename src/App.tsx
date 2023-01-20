import { useState } from "react";
import CustomRoutes from "./routes/CustomRoutes";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function App() {
  return (
    <>
      <Nav></Nav>
      <CustomRoutes></CustomRoutes>
      <Footer></Footer>
    </>
  );
}

export default App;
