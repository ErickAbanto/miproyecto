const router = require("express").Router()
const controller = require("../controllers/userController")
const { verifyToken } = require("../middlewares/authMiddleware")

router.post("/register", controller.register)
router.post("/login", controller.login)

router.get("/", verifyToken, controller.getAll)
router.put("/:id", verifyToken, controller.update)
router.delete("/:id", verifyToken, controller.remove)

module.exports = router
