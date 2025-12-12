import React from "react";
import { Link } from "react-router-dom";

// ICONOS
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">

        {/* INFORMACIÓN */}
        <div className="w-full sm:w-auto flex-1 min-w-[180px]">
          <h4 className="text-lg font-bold text-yellow-500 mb-4">Información</h4>

          <p className="mb-2 text-gray-400 flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-500" />
            Calle Principal 123, Ciudad
          </p>

          <p className="mb-2 text-gray-400 flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-500" />
            +51 234 567 8900
          </p>

          <p className="mb-2 text-gray-400 flex items-center gap-2">
            <FaEnvelope className="text-yellow-500" />
            hola@ohanapizza.com
          </p>
        </div>

        {/* LINKS RÁPIDOS */}
        <div className="w-full sm:w-auto flex-1 min-w-[180px]">
          <h4 className="text-lg font-bold text-yellow-500 mb-4">Links Rápidos</h4>

          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Inicio</Link></li>
            <li><Link to="/menu" className="text-gray-400 hover:text-white">Menú</Link></li>
            <li><Link to="/promociones" className="text-gray-400 hover:text-white">Promociones</Link></li>
            <li><Link to="/sobre-nosotros" className="text-gray-400 hover:text-white">Sobre Nosotros</Link></li>
            <li><Link to="/contacto" className="text-gray-400 hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div className="w-full sm:w-auto min-w-[180px]">
          <h4 className="text-lg font-bold text-yellow-500 mb-4">Síguenos</h4>

          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" className="text-white hover:text-yellow-500">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" className="text-white hover:text-yellow-500">
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/51999999999" className="text-white hover:text-green-400">
              <FaWhatsapp />
            </a>
          </div>

        </div>

      </div>

      <hr className="my-8 border-gray-700 max-w-7xl mx-auto" />

      <div className="text-center text-sm text-gray-500">
        © 2025 Ohana Pizza. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
