//
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
//hooks
import UptoTop from "../hooks/UptoTop";
//pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
type Props = {};

const CustomRoutes = (props: Props) => {
  return (
    <AnimatePresence>
      <HelmetProvider>
        <UptoTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contacto" element={<Contact />}></Route>
        </Routes>
      </HelmetProvider>
    </AnimatePresence>
  );
};

export default CustomRoutes;
