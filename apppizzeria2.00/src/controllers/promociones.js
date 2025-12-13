// controllers/promociones.js
console.log("✅ Controlador 'promociones.js' cargado");

const Promocion = require("../models/promociones");

exports.getPromociones = async (req, res) => {
  try {
    const promociones = await Promocion.find();
    res.json(promociones);
  } catch (error) {
    console.error("❌ Error en getPromociones:", error);
    res.status(500).json({ message: "Error al obtener promociones" });
  }
};

exports.createPromocion = async (req, res) => {
  try {
    const promocion = new Promocion(req.body);
    await promocion.save();
    res.status(201).json(promocion);
  } catch (error) {
    console.error("❌ Error en createPromocion:", error);
    res.status(400).json({ message: "Error al crear promoción", error: error.message });
  }
};