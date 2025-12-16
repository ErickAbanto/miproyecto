const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

exports.createUser = async ({ nombreUsuario, dni, password }) => {
  const hash = await bcrypt.hash(password, 10)

  return await User.create({
    nombreUsuario,
    dni,
    password: hash
  })
}

exports.loginUser = async (dni, password) => {
  const user = await User.findOne({ dni })
  if (!user) return null

  const valido = await bcrypt.compare(password, user.password)
  if (!valido) return null

  return user
}

exports.generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    process.env.ADMIN_SECRET_KEY,
    { expiresIn: "1h" }
  )
}
