import DesktopNavItem from "../atoms/DesktopNavItem";

function DesktopMenu({ closeMenu }) {
  return (
    <ul className="hidden lg:flex items-center gap-8 text-sm font-bold text-black justify-center">
      <DesktopNavItem to="/" label="Inicio" onClick={closeMenu} />
      <DesktopNavItem to="/menu" label="Menú" onClick={closeMenu} />
      <DesktopNavItem to="/promociones" label="Promociones" onClick={closeMenu} />
      <DesktopNavItem to="/sobre-nosotros" label="Sobre Nosotros" onClick={closeMenu} />
      <DesktopNavItem to="/contacto" label="Contacto" onClick={closeMenu} />
    </ul>
  );
}

export default DesktopMenu;
