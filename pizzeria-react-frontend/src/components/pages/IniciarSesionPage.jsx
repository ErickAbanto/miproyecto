import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../organisms/Footer";
import { FaEnvelope, FaLock, FaExclamationTriangle } from "react-icons/fa";

function IniciarSesionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validación básica en frontend
    if (!email.trim() || !password.trim()) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingrese un correo válido.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ← necesario si usas cookies (HttpOnly)
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Usa el mensaje del backend si existe, o genérico
        throw new Error(data.error || "Usuario y/o contraseña inválidos.");
      }

      //  Login exitoso → redirigir según rol
      switch (data.role) {
        case "C":
          navigate("/cdashboard", { replace: true });
          break;
        case "A":
          navigate("/adashboard", { replace: true });
          break;
        case "V":
          navigate("/vdashboard", { replace: true });
          break;
        default:
          navigate("/", { replace: true });
      }
    } catch (err) {
      setError(err.message || "Error al conectar con el servidor.");
      console.error("[Login Error]", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* Optional: Brand header */}
      <header className="py-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-yellow-600">Ohana</span> Pizzería
        </h1>
        <p className="text-sm text-gray-500 mt-1">¡Bienvenido de nuevo!</p>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-yellow-200">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Iniciar Sesión
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Accede a tu cuenta para continuar
            </p>
          </div>

          {error && (
            <div
              className="flex items-center gap-2 p-3 mb-5 text-sm text-red-700 bg-red-50 rounded-lg border border-red-200"
              role="alert"
            >
              <FaExclamationTriangle className="shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium text-sm mb-1"
              >
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaEnvelope />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@pizzeriaohana.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                  disabled={isLoading}
                  autoComplete="email"
                  aria-describedby={error ? "error-message" : undefined}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium text-sm mb-1"
              >
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <FaLock />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition"
                  disabled={isLoading}
                  autoComplete="current-password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all ${
                isLoading
                  ? "bg-yellow-400 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-700 active:scale-95"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Iniciando...
                </span>
              ) : (
                "Iniciar Sesión"
              )}
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-gray-600 text-sm">
              ¿Eres nuevo en{" "}
              <span className="font-semibold text-gray-800">Ohana</span>?
              <br />
              <Link
                to="/registrate-aqui"
                className="inline-block mt-1 font-semibold text-yellow-600 hover:text-yellow-800 hover:underline transition"
              >
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default IniciarSesionPage;
