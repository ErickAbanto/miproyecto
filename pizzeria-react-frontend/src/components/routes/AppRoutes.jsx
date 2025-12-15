import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import PromocionesPage from "../pages/PromocionesPage";
import SobreNosotrosPage from "../pages/SobreNosotrosPage";
import ContactoPage from "../pages/ContactoPage";
import IniciarSesionPage from "../pages/IniciarSesionPage";
import PedirAhoraPage from "../pages/PedirAhoraPage";
import RegistrateAqui from "../pages/RegistrateAqui";
import CarritoPage from "../pages/CarritoPage";
import CDashboard from "../pages/CDashboard";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/promociones" element={<PromocionesPage />} />
      <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/iniciar-sesion" element={<IniciarSesionPage />} />
      <Route path="/registrate-aqui" element={<RegistrateAqui />} />
      <Route path="/pedir-ahora" element={<PedirAhoraPage />} />
      <Route path="/carrito" element={<CarritoPage />} />

      <Route
        path="/cdashboard"
        element={
          <ProtectedRoute>
            <CDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
