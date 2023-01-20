//
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
//hooks
import UptoTop from "../hooks/UptoTop";
//pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Proyecto from "../pages/Proyecto";
type Props = {};

const CustomRoutes = (props: Props) => {
  return (
    <AnimatePresence>
      <HelmetProvider>
        <UptoTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contacto" element={<Contact />}></Route>
          <Route path="/Proyecto/:name" element={<Proyecto />}></Route>
        </Routes>
      </HelmetProvider>
    </AnimatePresence>
  );
};

export default CustomRoutes;
