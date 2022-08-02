import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { PersonagemClicado } from "../pages/PersonagemClicado";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/personagens" />} />
      <Route path="/personagens" element={<Home />} />
      <Route path="/personagens/:id" element={<PersonagemClicado />} />
    </Routes>
  );
};

export default RoutesMain;
