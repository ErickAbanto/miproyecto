const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Rutas
const authRoutes = require("./routes/authRoutes");

const app = express();

/* =====================
   MIDDLEWARES
===================== */
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend Vite
    credentials: true,               // Permitir cookies
  })
);

app.use(express.json());
app.use(cookieParser());

/* =====================
   CONFIGURACIÓN
===================== */
const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/pizzeria_db";

/* =====================
   CONEXIÓN A MONGODB
===================== */
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Mongoose conectado a la base de datos"))
  .catch((err) =>
    console.error("Error de conexión a la base de datos:", err)
  );

/* =====================
   MODELO PIZZA
===================== */
const PizzaSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },

    categoria: {
      type: String,
      enum: ["Pizzas", "Pastas", "Bebidas"],
      required: true,
    },

    precio: { type: Number, required: true, min: 0 },
    img: { type: String, required: true },

    descripcion: { type: String, default: "" },
    ingredientes: { type: [String], default: [] },

    extras: [
      {
        nombre: String,
        precio: { type: Number, min: 0 },
      },
    ],

    tamanos: [
      {
        nombre: String,
        precio: { type: Number, min: 0 },
      },
    ],
  },
  { timestamps: true }
);

const Pizza = mongoose.model("Pizza", PizzaSchema);

/* =====================
   RUTAS API - PIZZAS
===================== */

// Obtener todas las pizzas
app.get("/api/pizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.status(200).json(pizzas);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener pizzas" });
  }
});

// Crear pizza
app.post("/api/pizzas", async (req, res) => {
  try {
    const nuevaPizza = new Pizza(req.body);
    await nuevaPizza.save();
    res.status(201).json(nuevaPizza);
  } catch (err) {
    res.status(400).json({
      error: "Datos inválidos al crear pizza",
      detalle: err.message,
    });
  }
});

// Editar pizza
app.put("/api/pizzas/:id", async (req, res) => {
  try {
    const updated = await Pizza.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Error al actualizar pizza" });
  }
});

// Eliminar pizza
app.delete("/api/pizzas/:id", async (req, res) => {
  try {
    await Pizza.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Pizza eliminada" });
  } catch (err) {
    res.status(400).json({ error: "Error al eliminar pizza" });
  }
});

/* =====================
   RUTAS AUTH
===================== */
app.use("/api/auth", authRoutes);

/* =====================
   TEST SERVER
===================== */
app.get("/", (req, res) => {
  res.send("Servidor backend corriendo correctamente");
});

/* =====================
   SERVIDOR
===================== */
app.listen(PORT, () => {
  console.log(`Backend en http://localhost:${PORT}`);
});
