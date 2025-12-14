// seedPromociones.js
const mongoose = require("mongoose");

// ✅ Ruta corregida: apunta a 'promociones.js' (tu nombre real)
const Promocion = require("./src/models/promociones");

// Usa el mismo URI que en app.js
const MONGODB_URI = "mongodb://localhost:27017/pizzeria_db";

const ofertasData = [
  {
    titulo: "Pizza del Mes",
    descripcion: "Especial Hawaiiana con ingredientes premium",
    validez: "31 Dic 2025",
    precioAnterior: "S/ 16.99",
    precioActual: "S/ 11.99",
    descuento: "29% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Hawaiiana",
  },
  {
    titulo: "Martes de Vegetarianas",
    descripcion: "Todas las pizzas vegetarianas con 40% de descuento",
    validez: "Todos los martes",
    precioAnterior: "S/ 11.99",
    precioActual: "S/ 7.19",
    descuento: "40% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Vegetariana",
  },
  {
    titulo: "Combo Familiar",
    descripcion: "2 pizzas medianas + bebida de 2L + palitos de queso",
    validez: "15 Dic 2025",
    precioAnterior: "S/ 34.99",
    precioActual: "S/ 24.99",
    descuento: "30% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Combo+Familiar",
  },
  {
    titulo: "2x1 en Pizzas Familiares",
    descripcion: "Lleva 2 pizzas familiares al precio de 1. Válido de lunes a jueves.",
    validez: "30 Nov 2025",
    precioAnterior: "S/ 25.98",
    precioActual: "S/ 12.99",
    descuento: "50% OFF",
    imagenUrl: "https://via.placeholder.com/300x200?text=Pizza+Pepperoni",
  },
];

async function seedDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Conectado a MongoDB");

    // Vaciar colección (evita duplicados)
    await Promocion.deleteMany({});
    console.log("🗑️ Colección 'promociones' vaciada");

    // Insertar promociones
    await Promocion.insertMany(ofertasData);
    console.log("✅ 4 promociones insertadas");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error al sembrar la base de datos:", error);
    process.exit(1);
  }
}

seedDB();