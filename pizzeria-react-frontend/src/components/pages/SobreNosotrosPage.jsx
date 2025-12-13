import React from "react";
import Footer from "../organisms/Footer";
import { FaLeaf, FaHandHoldingHeart, FaUsers, FaRecycle } from "react-icons/fa";

export default function SobreNosotrosPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* HERO */}
      <section className="py-12 px-4 sm:px-6 md:px-8 text-center bg-linear-to-r from-yellow-50 to-white">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Sobre <span className="text-yellow-600">Nosotros</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Donde cada pizza cuenta una historia de familia, tradición y sabor auténtico.
        </p>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 px-4 sm:px-6 md:px-8 py-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* —————— NUESTRA HISTORIA — TEXTO IZQUIERDA / IMAGEN DERECHA —————— */}
          <div className="flex flex-col lg:flex-row items-center gap-48"> {/* gap-60 → gap-48 (máximo válido cercano) */}
            {/* Contenedor de texto — Historia */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-yellow-500 p-7 w-full max-w-lg shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
                Nuestra Historia
              </h2>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  En 1995, Mario abrió un pequeño local con un horno de leña y un sueño: compartir el sabor auténtico de la pizza italiana.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hoy, Ohana —que significa <em>“familia”</em> en hawaiano— sigue ese legado: cocinamos como si cada plato fuera para los nuestros.
                </p>
              </div>
            </div>

            {/* Imagen circular grande — a la derecha */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 rounded-full border-4 border-yellow-500 shadow-xl overflow-hidden">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Pizza Margherita — el inicio de nuestra historia"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 🔶 LÍNEA HORIZONTAL AMARILLA — ABARCA TODA LA PANTALLA */}
          <div className="w-full h-1 bg-yellow-500 my-10"></div>

          {/* —————— PASIÓN POR EL SABOR — TEXTO IZQUIERDA / IMAGEN DERECHA —————— */}
          <div className="flex flex-col lg:flex-row items-center gap-56"> {/* gap-70 → gap-56 (máximo válido cercano) */}
            {/* Contenedor de texto — Pasión */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-yellow-500 p-6 w-full max-w-lg shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pasión por el Sabor
              </h2>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  No seguimos tendencias: creamos experiencias. Usamos ingredientes frescos, masa fermentada 48h y técnicas heredadas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Cada pizza es una combinación de tradición italiana, toques peruanos y mucho cariño.
                </p>
              </div>
            </div>

            {/* Imagen circular grande — también a la derecha */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 rounded-full border-4 border-yellow-500 shadow-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
                    alt="Chef amasando pizza — pasión en cada detalle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

         {/* 🔶 LÍNEA HORIZONTAL AMARILLA — ABARCA TODA LA PANTALLA */}
          <div className="w-full h-1 bg-yellow-500 my-10"></div>


          {/* VALORES CLAVE */}
          <section className="pt-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Lo que nos define
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <FaLeaf className="text-yellow-600 text-3xl mx-auto mb-2" />,
                  title: "Frescura",
                  desc: "Ingredientes locales y de temporada, cada día.",
                },
                {
                  icon: <FaHandHoldingHeart className="text-yellow-600 text-3xl mx-auto mb-2" />,
                  title: "Artesanal",
                  desc: "Masa hecha a mano, sin congelar ni acelerantes.",
                },
                {
                  icon: <FaUsers className="text-yellow-600 text-3xl mx-auto mb-2" />,
                  title: "Familia",
                  desc: "Trato cercano, como en casa de un ser querido.",
                },
                {
                  icon: <FaRecycle className="text-yellow-600 text-3xl mx-auto mb-2" />,
                  title: "Sostenible",
                  desc: "Envases biodegradables y reducción de desperdicio.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-5 text-center border border-gray-200 hover:shadow-md transition-shadow"
                >
                  {item.icon}
                  <h3 className="font-bold text-yellow-600 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <div className="mt-10 grow">
        <Footer />
      </div>
    </div>
  );
}