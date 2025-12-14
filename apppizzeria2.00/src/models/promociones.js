// models/promociones.js
const mongoose = require("mongoose");

const promocionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  validez: { type: String, required: true },
  precioAnterior: { type: String, required: true },
  precioActual: { type: String, required: true },
  descuento: { type: String, required: true },
  imagenUrl: { type: String, required: true },
}, {
  timestamps: true,
});

// ✅ Nombre del modelo: "Promocion" (singular, mayúscula — convención Mongoose)
module.exports = mongoose.model("Promocion", promocionSchema);