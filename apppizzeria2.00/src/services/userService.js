const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* =========================
   CREAR USUARIO
========================= */
const createUser = async ({ nombreUsuario, dni, password, role }) => {
  // Validar si el DNI ya existe
  const existingUser = await User.findOne({ dni });
  if (existingUser) {
    throw new Error("El DNI ya está registrado");
  }

  // Convertir role "cliente" a "C" si es enviado desde frontend
  if (role === "cliente" || !role) role = "C";

  // Hashear la contraseña
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    nombreUsuario,
    dni,
    password: hashedPassword,
    role
  });

  return await user.save();
};

/* =========================
   LOGIN USUARIO
========================= */
const loginUser = async (dni, password) => {
  const user = await User.findOne({ dni });
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  return user;
};

/* =========================
   GENERAR TOKEN JWT
========================= */
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    process.env.ADMIN_SECRET_KEY,
    { expiresIn: "1h" }
  );
};

module.exports = {
  createUser,
  loginUser,
  generateToken
};
