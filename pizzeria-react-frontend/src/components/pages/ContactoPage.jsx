import React from "react";
// Importaciones de react-icons
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Footer from "../organisms/Footer";

function ContactoPage() {
 
  return (
    <div className="w-full bg-gray-100">
      <div className="px-4 sm:px-5 md:px-6 pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-14 md:pb-16 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">
          Contáctanos
        </h1>

        <p className="text-base sm:text-lg text-center text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
          ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.
        </p>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {/* COLUMNA IZQUIERDA */}
          <div className="space-y-5 sm:space-y-6">
            {/* Teléfono */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-5 sm:p-6 flex flex-col items-center text-center border-2 border-yellow-500">
              <FaPhone className="text-yellow-600 w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
              <p className="font-semibold text-gray-800">Teléfono</p>
              <p className="text-gray-600 mt-1"> +51 910 151 588</p>
            </div>

            {/* Correo */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-5 sm:p-6 flex flex-col items-center text-center border-2 border-yellow-500">
              <FaEnvelope className="text-yellow-600 w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
              <p className="font-semibold text-gray-800">Correo</p>
              <p className="text-gray-600 mt-1">ohanapizzas@gmail.com</p>
            </div>

            {/* Horario */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-5 sm:p-6 flex flex-col items-center text-center border-2 border-yellow-500">
              <FaClock className="text-yellow-600 w-7 h-7 sm:w-8 sm:h-8 mb-2 sm:mb-3" />
              <p className="font-semibold text-gray-800">Horario</p>
              <p className="text-gray-600 mt-1">
                Desde las 18:00 hs - 11:00 hs
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="space-y-5 sm:space-y-6">
            {/* MAPA — Luque, Paraguay */}
            <div className="w-full h-64 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl border-2 border-yellow-500">
              <iframe
                title="Pizzería Ohana - Luque"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.5364423332137!2d-78.14762744350648!3d-6.868353901864619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b3cd0030f39669%3A0xdf36bf68323020a8!2sPizzer%C3%ADa%20Ohana!5e1!3m2!1ses-419!2spe!4v1765640367758!5m2!1ses-419!2spe"
                style={{ border: 0 }}
              />
            </div>

            {/* REDES SOCIALES */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-5 sm:p-6 flex flex-col items-center text-center border-2 border-yellow-500">
              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-3 sm:mb-4">
                Síguenos en Redes Sociales
              </h3>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a
                  href="https://facebook.com/ohanapizzeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>

                <a
                  href="https://instagram.com/ohanapizzeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>

                <a
                  href="https://wa.me/51910151588?text=Hola%20👋%20quisiera%20hacer%20un%20pedido%20o%20recibir%20más%20información%20sobre%20sus%20pizzas.%20Gracias."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>

                <a
                  href="https://www.tiktok.com/@ohanapizzeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="TikTok"
                >
                  <SiTiktok className="w-7 h-7 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PREGUNTAS FRECUENTES — actualizadas con datos reales */}
        <div className="mt-10 sm:mt-12 md:mt-16 max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-5 sm:p-6 md:p-8 border-2 border-yellow-500">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {[
              {
                q: "¿Dónde están ubicados?",
                a: "Estamos ubicados en el Jr. Ayacucho, cuadra 4, en la ciudad de Celendín, en una zona de fácil acceso para nuestros clientes.",
              },
              {
                q: "¿Cuál es el horario de atención?",
                a: "Nuestro horario de atención es de lunes a domingo, desde las 6:00 p.m. hasta las 11:00 p.m. Para que puedas disfrutar de nuestras pizzas todos los días.",
              },
              {
                q: "¿Hacen envíos a domicilio?",
                a: "Sí, contamos con servicio de delivery dentro de la ciudad, para que disfrutes de nuestras pizzas sin salir de casa.",
              },
              {
                q: "¿Aceptan pedidos por WhatsApp?",
                a: "Sí, puedes realizar tus pedidos o consultas a través de WhatsApp al +51 910 151 588, donde te atenderemos de manera rápida y personalizada.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="pb-3 border-b border-gray-200 last:border-b-0"
              >
                <h3 className="font-semibold text-gray-800 mb-1">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactoPage;
