// routes/promociones.js
const express = require("express");
const router = express.Router();

// ✅ CORREGIDO: apunta a 'promociones.js' (tu nombre real)
const { getPromociones, createPromocion } = require("../controllers/promociones");

// GET /api/promociones → listado
router.get("/", getPromociones);

// POST /api/promociones → crear (opcional)
router.post("/", createPromocion);

module.exports = router;