const User = require("../models/User");
const { createUser, loginUser, generateToken } = require("../services/userService");
const { registerSchema, loginSchema } = require("../validators/userValidator");

/* =========================
   REGISTRO
========================= */
exports.register = async (req, res) => {
  try {
    // Validar body con Joi
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { nombreUsuario, dni, password, role } = req.body;

    // Crear usuario usando el service
    const user = await createUser({ nombreUsuario, dni, password, role });

    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      usuario: {
        id: user._id,
        nombreUsuario: user.nombreUsuario,
        dni: user.dni,
        role: user.role
      }
    });
  } catch (error) {
    console.error("ERROR REGISTER:", error.message);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

/* =========================
   LOGIN
========================= */
exports.login = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { dni, password } = req.body;
    const user = await loginUser(dni, password);

    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = generateToken(user);

    // Enviar token en cookie httpOnly
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000 // 1 hora
    });

    res.json({
      mensaje: "Login exitoso",
      token,
      usuario: {
        id: user._id,
        nombreUsuario: user.nombreUsuario,
        dni: user.dni,
        role: user.role
      }
    });
  } catch (error) {
    console.error("ERROR LOGIN:", error.message);
    res.status(500).json({ error: "Error en login" });
  }
};

/* =========================
   LISTAR USUARIOS
========================= */
exports.getAll = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json({
      mensaje: "Usuarios obtenidos correctamente",
      total: users.length,
      data: users
    });
  } catch (error) {
    console.error("ERROR GET USERS:", error.message);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

/* =========================
   ACTUALIZAR USUARIO
========================= */
exports.update = async (req, res) => {
  try {
    // Validar si se actualiza role para que coincida con el enum
    if (req.body.role && !["A", "V", "C"].includes(req.body.role)) {
      return res.status(400).json({ error: "Role inválido" });
    }

    const userUpdated = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select("-password");

    if (!userUpdated) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({
      mensaje: "Usuario actualizado correctamente",
      usuario: userUpdated
    });
  } catch (error) {
    console.error("ERROR UPDATE USER:", error.message);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

/* =========================
   ELIMINAR USUARIO
========================= */
exports.remove = async (req, res) => {
  try {
    const userDeleted = await User.findByIdAndDelete(req.params.id);

    if (!userDeleted) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json({
      mensaje: "Usuario eliminado correctamente"
    });
  } catch (error) {
    console.error("ERROR DELETE USER:", error.message);
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};
