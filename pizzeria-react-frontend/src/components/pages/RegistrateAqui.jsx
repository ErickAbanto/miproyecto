import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import { Link } from "react-router-dom";

function RegistrateAqui() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="w-full bg-gray-100">
      <div className="w-full flex items-start justify-center px-4 py-12">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-10 border-2 border-yellow-500">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Crear Cuenta
          </h2>

          <form className="space-y-6">

            <div>
              <label className="text-gray-700 font-semibold text-sm">Nombre Completo</label>
              <div className="mt-2 bg-gray-100 p-3 rounded-xl border border-gray-300">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-transparent outline-none text-gray-700 text-sm"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-semibold text-sm">Correo Electrónico</label>
              <div className="mt-2 flex items-center gap-3 bg-gray-100 p-3 rounded-xl border border-gray-300">
                <FaEnvelope className="text-gray-500 text-lg" />
                <input
                  type="email"
                  placeholder="Ingrese su correo"
                  className="w-full bg-transparent outline-none text-gray-700 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-semibold text-sm">Contraseña</label>
              <div className="mt-2 flex items-center gap-3 bg-gray-100 p-3 rounded-xl border border-gray-300">
                <FaLock className="text-gray-500 text-lg" />
                <input
                  type="password"
                  placeholder="Ingrese su contraseña"
                  className="w-full bg-transparent outline-none text-gray-700 text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-gray-700 font-semibold text-sm">Confirmar Contraseña</label>
              <div className="mt-2 flex items-center gap-3 bg-gray-100 p-3 rounded-xl border border-gray-300">
                <FaLock className="text-gray-500 text-lg" />
                <input
                  type="password"
                  placeholder="Repita su contraseña"
                  className="w-full bg-transparent outline-none text-gray-700 text-sm"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
            </div>

            <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-xl text-lg transition-all">
              Registrarse
            </button>

          </form>

          <p className="text-center text-gray-600 mt-6 text-sm">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/iniciar-sesion"
              className="text-yellow-600 font-bold hover:underline"
            >
              Iniciar sesión
            </Link>
          </p>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-200 py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">

          <div className="w-full sm:w-auto flex-1 min-w-[180px]">
            <h4 className="text-lg font-bold text-yellow-500 mb-4">Información</h4>

            <p className="mb-2 text-gray-400 flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" />
              Calle Principal 123, Ciudad
            </p>

            <p className="mb-2 text-gray-400 flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" />
              +1 234 567 8900
            </p>

            <p className="mb-2 text-gray-400 flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" />
              hola@olimpiapizza.com
            </p>
          </div>

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

          <div className="w-full sm:w-auto min-w-[180px]">
            <h4 className="text-lg font-bold text-yellow-500 mb-4">Síguenos</h4>

            <div className="flex space-x-4 text-2xl">
              <a href="https://facebook.com" className="text-white hover:text-yellow-500"><FaFacebookF /></a>
              <a href="https://instagram.com" className="text-white hover:text-yellow-500"><FaInstagram /></a>
              <a href="https://twitter.com" className="text-white hover:text-yellow-500"><FaTwitter /></a>
            </div>
          </div>

        </div>

        <hr className="my-8 border-gray-700 max-w-7xl mx-auto" />

        <div className="text-center text-sm text-gray-500">
          © 2025 Olimpia Pizza. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default RegistrateAqui;
