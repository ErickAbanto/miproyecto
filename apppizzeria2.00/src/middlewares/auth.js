const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" })
  }

  try {
    const decoded = jwt.verify(token, process.env.ADMIN_SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ error: "Token inválido" })
  }
}
