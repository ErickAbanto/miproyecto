import React, { useState, useEffect } from "react";
import Footer from "../organisms/Footer";
import { FaRegCalendarAlt, FaWhatsapp } from "react-icons/fa";

const OfertaCard = ({ oferta }) => {
  const {
    titulo,
    descripcion,
    validez,
    precioAnterior,
    precioActual,
    descuento,
    imagenUrl,
  } = oferta;

  return (
    <div className="flex flex-col sm:flex-row max-w-4xl mx-auto my-6 bg-white border-2 border-yellow-500 rounded-lg shadow-md overflow-hidden hover:shadow-xl">
      <div className="relative w-full sm:w-2/5 h-48 sm:h-auto">
        <img
          src={imagenUrl}
          alt={titulo}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 right-4 bg-yellow-400 text-gray-800 text-sm font-bold px-3 py-1 rounded">
          {descuento}
        </span>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            {titulo}
          </h3>
          <p className="text-gray-600 mb-3">{descripcion}</p>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
            <FaRegCalendarAlt className="text-yellow-500" />
            Válido hasta: <strong>{validez}</strong>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <span className="line-through text-gray-400 mr-3">
              {precioAnterior}
            </span>
            <span className="text-2xl font-bold text-gray-800">
              {precioActual}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PromocionesPage() {
  const [promociones, setPromociones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ URL corregida: sin espacio extra
  const mensaje = "¡Hola! Quisiera saber más sobre las promociones de su pizzería.";
  const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(mensaje)}`;

  useEffect(() => {
    const fetchPromociones = async () => {
      try {
        // ✅ ✅ ✅ APUNTA DIRECTAMENTE AL BACKEND ✅ ✅ ✅
        const res = await fetch("http://localhost:3000/api/promociones");
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        const data = await res.json();
        setPromociones(data);
      } catch (err) {
        console.error("❌ Error al cargar promociones:", err);
        setError("No se pudieron cargar las promociones. ¿El backend está corriendo?");
      } finally {
        setLoading(false);
      }
    };

    fetchPromociones();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 w-full">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Promociones Especiales
          </h1>
          <p className="text-xl text-gray-600">
            Aprovecha nuestras increíbles ofertas
          </p>
        </section>

        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Cargando ofertas... 🍕</p>
          </div>
        ) : error ? (
          <div className="text-center py-10 text-red-500">
            <p>⚠️ {error}</p>
            <p className="text-sm mt-2">
              Prueba abrir:{" "}
              <a
                href="http://localhost:3000/api/promociones"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                http://localhost:3000/api/promociones
              </a>
            </p>
          </div>
        ) : (
          <section>
            {promociones.length > 0 ? (
              promociones.map((oferta) => (
                <OfertaCard key={oferta._id} oferta={oferta} />
              ))
            ) : (
              <p className="text-center text-gray-500">No hay promociones disponibles por ahora.</p>
            )}
          </section>
        )}
      </main>

      <div className="mt-10 flex-grow">
        <Footer />
      </div>

      {/* WhatsApp flotante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all z-50 w-14 h-14 lg:w-32 lg:h-14"
        aria-label="Contacto por WhatsApp"
      >
        <FaWhatsapp size={24} />
        <span className="ml-2 font-medium hidden lg:inline">Consultar</span>
      </a>
    </div>
  );
}