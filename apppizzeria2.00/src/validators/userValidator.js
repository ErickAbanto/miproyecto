const Joi = require("joi");

/* =========================
   VALIDACIÓN REGISTRO
========================= */
const registerSchema = Joi.object({
  nombreUsuario: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
      "string.base": "El nombre de usuario debe ser texto",
      "string.empty": "El nombre de usuario es obligatorio",
      "string.min": "El nombre de usuario debe tener al menos 3 caracteres",
      "string.max": "El nombre de usuario debe tener máximo 30 caracteres",
      "any.required": "El nombre de usuario es obligatorio"
    }),
  
  dni: Joi.string()
    .pattern(/^\d{8}$/)
    .required()
    .messages({
      "string.pattern.base": "El DNI debe tener 8 dígitos",
      "string.empty": "El DNI es obligatorio",
      "any.required": "El DNI es obligatorio"
    }),
  
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      "string.min": "La contraseña debe tener al menos 6 caracteres",
      "string.empty": "La contraseña es obligatoria",
      "any.required": "La contraseña es obligatoria"
    }),
  
  verificarPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Las contraseñas no coinciden",
      "string.empty": "Debe verificar la contraseña",
      "any.required": "Debe verificar la contraseña"
    }),
  
  role: Joi.string()
    .valid("A", "V", "C", "cliente")
    .optional()
    .messages({
      "any.only": "Role inválido"
    })
});

/* =========================
   VALIDACIÓN LOGIN
========================= */
const loginSchema = Joi.object({
  dni: Joi.string()
    .pattern(/^\d{8}$/)
    .required()
    .messages({
      "string.pattern.base": "El DNI debe tener 8 dígitos",
      "string.empty": "El DNI es obligatorio",
      "any.required": "El DNI es obligatorio"
    }),
  
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      "string.min": "La contraseña debe tener al menos 6 caracteres",
      "string.empty": "La contraseña es obligatoria",
      "any.required": "La contraseña es obligatoria"
    })
});

module.exports = { registerSchema, loginSchema };
