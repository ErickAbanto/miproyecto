import { useLocation, Link } from "react-router-dom";

function PedirAhoraPage() {
  const { state } = useLocation();

  const carrito = state?.carrito || [];
  const total = state?.total || 0;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
      <h1 className="text-4xl font-bold text-center mb-8">Confirmar Pedido</h1>

      {carrito.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          No tienes productos en tu pedido.
        </p>
      ) : (
        <div className="space-y-6">
          {carrito.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md"
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="w-16 h-16 object-contain"
              />

              <div className="flex-1 px-4">
                <h2 className="text-lg font-bold">{item.nombre}</h2>
                <p className="text-gray-600">
                  {item.cantidad} × S/ {item.precio.toFixed(2)}
                </p>
              </div>

              <p className="text-lg font-bold">
                S/ {(item.cantidad * item.precio).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="bg-white p-5 rounded-2xl shadow-lg mt-6 text-center">
            <h2 className="text-3xl font-bold">
              Total a Pagar: <span className="text-green-600">S/ {total.toFixed(2)}</span>
            </h2>
          </div>

          <button
            className="
              w-full bg-green-600 text-white py-3 mt-4 rounded-xl font-semibold 
              hover:bg-green-700 transition shadow-md
            "
          >
            Confirmar Pedido
          </button>

          <Link
            to="/carrito"
            className="block text-center text-blue-600 mt-4 hover:underline"
          >
            Volver al carrito
          </Link>
        </div>
      )}
    </div>
    
  );
}

export default PedirAhoraPage;
