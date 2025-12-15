import { X } from "lucide-react";
import MobileNavItem from "../atoms/MobileNavItem";
import {
  FaHome,
  FaPizzaSlice,
  FaTags,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function MobileMenu({ openMenu, closeMenu, menuRef }) {
  if (!openMenu) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40 lg:hidden"></div>

      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[78%] bg-[#fff7e8] lg:hidden border-l-4 border-black shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)] flex flex-col py-8 px-6 gap-6 z-50"
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 w-10 h-10 bg-white border-2 border-black rounded-full"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col gap-6 mt-16">
          <MobileNavItem to="/" label="Inicio" icon={FaHome} onClick={closeMenu} />
          <MobileNavItem to="/menu" label="Menú" icon={FaPizzaSlice} onClick={closeMenu} />
          <MobileNavItem to="/promociones" label="Promociones" icon={FaTags} onClick={closeMenu} />
          <MobileNavItem to="/sobre-nosotros" label="Sobre Nosotros" icon={FaInfoCircle} onClick={closeMenu} />
          <MobileNavItem to="/contacto" label="Contacto" icon={FaPhoneAlt} onClick={closeMenu} />
        </div>

        <Link
          to="/iniciar-sesion"
          onClick={closeMenu}
          className="mt-auto text-center font-bold py-3 bg-black text-white rounded-xl border-4 border-black"
        >
          Iniciar Sesión
        </Link>
      </div>
    </>
  );
}

export default MobileMenu;
