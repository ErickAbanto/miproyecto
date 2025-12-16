const User = require("../models/User")
const { createUser, loginUser, generateToken } = require("../services/userService")
const { registerSchema, loginSchema } = require("../validators/userValidator")

/*REGISTRO*/
exports.register = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    const { nombreUsuario, dni, password } = req.body

    const existe = await User.findOne({ dni })
    if (existe) {
      return res.status(400).json({ error: "DNI ya registrado" })
    }

    const user = await createUser({ nombreUsuario, dni, password })

    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      usuario: {
        id: user._id,
        nombreUsuario: user.nombreUsuario,
        dni: user.dni,
        role: user.role
      }
    })
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" })
  }
}

/*LOGIN*/
exports.login = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body)
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    const { dni, password } = req.body
    const user = await loginUser(dni, password)

    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" })
    }

    const token = generateToken(user)

    // COOKIE SEGURA
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000
    })

    res.json({
      mensaje: "Login exitoso",
      token,
      usuario: {
        id: user._id,
        nombreUsuario: user.nombreUsuario,
        dni: user.dni,
        role: user.role
      }
    })
  } catch (error) {
    res.status(500).json({ error: "Error en login" })
  }
}

/*LISTAR USUARIOS*/
exports.getAll = async (req, res) => {
  try {
    const users = await User.find().select("-password")

    res.json({
      mensaje: "Usuarios obtenidos correctamente",
      total: users.length,
      data: users
    })
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" })
  }
}

/*ACTUALIZAR USUARIO*/
exports.update = async (req, res) => {
  try {
    const userUpdated = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select("-password")

    if (!userUpdated) {
      return res.status(404).json({ error: "Usuario no encontrado" })
    }

    res.json({
      mensaje: "Usuario actualizado correctamente",
      usuario: userUpdated
    })
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario" })
  }
}

/* ELIMINAR USUARIO*/
exports.remove = async (req, res) => {
  try {
    const userDeleted = await User.findByIdAndDelete(req.params.id)

    if (!userDeleted) {
      return res.status(404).json({ error: "Usuario no encontrado" })
    }

    res.json({
      mensaje: "Usuario eliminado correctamente"
    })
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" })
  }
}
