import { useState } from "react";
import CustomRoutes from "./routes/CustomRoutes";
import Nav from "./components/layout/Nav";
function App() {
  return (
    <>
      <Nav></Nav>
      <CustomRoutes></CustomRoutes>
    </>
  );
}

export default App;
