import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import ElectroTecnologia from "./page/ElectroTecnologia";
import SuperMercado from "./page/SuperMercado";
import HogarBazar from "./page/HogarBazar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/electro_hogar" element={<ElectroTecnologia />} />
          <Route path="/super_mercado" element={<SuperMercado />} />
          <Route path="/hogar_bazar" element={<HogarBazar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
