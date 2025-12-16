const router = require("express").Router()
const userController = require("../controllers/userController")
const auth = require("../middlewares/auth")

// REGISTRO
router.post("/register", userController.register)

// LOGIN
router.post("/login", userController.login)

// LISTAR USUARIOS (PROTEGIDO)
router.get("/", auth, userController.getAll)

// ACTUALIZAR USUARIO
router.put("/:id", auth, userController.update)

// ELIMINAR USUARIO
router.delete("/:id", auth, userController.remove)

module.exports = router
