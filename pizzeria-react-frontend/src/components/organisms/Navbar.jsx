import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import Logo from "../atoms/Logo";
import DesktopMenu from "../molecules/DesktopMenu";
import ProfileDropdown from "../molecules/ProfileDropdown";
import MobileMenu from "../molecules/MobileMenu";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menuRef = useRef(null);
  const profileRef = useRef(null);

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  // Cerrar dropdown de perfil al hacer clic fuera
  useEffect(() => {
    function handleClickOutsideProfile(event) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    }

    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutsideProfile);
    } else {
      document.removeEventListener("mousedown", handleClickOutsideProfile);
    }

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutsideProfile
      );
  }, [profileOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fff7e8] z-50 shadow-lg py-4 px-6 flex justify-between items-center transition-all duration-300">

      {/* LOGO */}
      <Logo />

      {/* MENÚ DESKTOP */}
      <DesktopMenu closeMenu={() => setOpenMenu(false)} />

      {/* DERECHA */}
      <div className="flex items-center gap-6">

        {/* INICIAR SESIÓN (desktop) */}
        <Link
          to="/iniciar-sesion"
          className="font-medium text-black hover:text-yellow-600 transition-all duration-200 hidden lg:block"
        >
          Iniciar Sesión
        </Link>

        {/* PERFIL */}
        <ProfileDropdown
          profileOpen={profileOpen}
          setProfileOpen={setProfileOpen}
          profileRef={profileRef}
        />

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="lg:hidden w-12 h-12 flex items-center justify-center bg-white border-4 border-black rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-all duration-300 relative"
        >
          <span
            className={`absolute transition-all duration-300 ${
              openMenu
                ? "rotate-90 opacity-0"
                : "opacity-100 rotate-0"
            }`}
          >
            <Menu size={28} strokeWidth={3} />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              openMenu
                ? "opacity-100 rotate-0"
                : "opacity-0 rotate-90"
            }`}
          >
            <X size={28} strokeWidth={3} />
          </span>
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      <MobileMenu
        openMenu={openMenu}
        closeMenu={() => setOpenMenu(false)}
        menuRef={menuRef}
      />

      {/* LÍNEA DECORATIVA */}
      <div className="absolute bottom-0 left-0 w-full h-0.75 bg-black"></div>
    </nav>
  );
}

export default Navbar;
