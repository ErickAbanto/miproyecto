const Joi = require("joi")

exports.registerSchema = Joi.object({
  nombreUsuario: Joi.string().min(3).required(),
  dni: Joi.string().length(8).pattern(/^\d+$/).required(),
  password: Joi.string().min(6).required(),
  verificarPassword: Joi.string().valid(Joi.ref("password")).required()
})

exports.loginSchema = Joi.object({
  dni: Joi.string().length(8).required(),
  password: Joi.string().required()
})
