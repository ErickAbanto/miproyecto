import React from "react";
import Footer from "../organisms/Footer";
import { FaRegCalendarAlt, FaWhatsapp } from "react-icons/fa";

const ofertasData = [
  {
    id: 1,
    titulo: "Pizza del Mes",
    descripcion: "Especial Hawaiiana con ingredientes premium",
    validez: "31 Dic 2025",
    precioAnterior: "S/ 16.99",
    precioActual: "S/ 11.99",
    descuento: "29% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Hawaiiana",
  },
  {
    id: 2,
    titulo: "Martes de Vegetarianas",
    descripcion: "Todas las pizzas vegetarianas con 40% de descuento",
    validez: "Todos los martes",
    precioAnterior: "S/ 11.99",
    precioActual: "S/ 7.19",
    descuento: "40% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Vegetariana",
  },
  {
    id: 3,
    titulo: "Combo Familiar",
    descripcion: "2 pizzas medianas + bebida de 2L + palitos de queso",
    validez: "15 Dic 2025",
    precioAnterior: "S/ 34.99",
    precioActual: "S/ 24.99",
    descuento: "30% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Combo+Familiar",
  },
  {
    id: 4,
    titulo: "2x1 en Pizzas Familiares",
    descripcion:
      "Lleva 2 pizzas familiares al precio de 1. Válido de lunes a jueves.",
    validez: "30 Nov 2025",
    precioAnterior: "S/ 25.98",
    precioActual: "S/ 12.99",
    descuento: "50% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Pepperoni",
  },
];

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
  // Mensaje predefinido para el WhatsApp flotante
  const mensaje = "¡Hola! Quisiera saber más sobre sus promociones.";
  const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(mensaje)}`;

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

        <section>
          {ofertasData.map((oferta) => (
            <OfertaCard key={oferta.id} oferta={oferta} />
          ))}
        </section>
      </main>

      <div className="mt-10 flex-grow">
        <Footer />
      </div>

{/* ÍCONO FLOTANTE DE WHATSAPP — con texto "Consultar" */}
<a
  href="https://wa.me/51999999999?text=¡Hola!%20Quisiera%20saber%20más%20sobre%20Pizzería%20Ohana."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all z-50
    w-14 h-14 lg:w-32 lg:h-14"
  aria-label="Contacto por WhatsApp"
>
  <FaWhatsapp size={24} />
  <span className="ml-2 font-medium hidden lg:inline">Consultar</span>
</a>
    </div>
  );
}