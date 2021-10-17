const Router = require("express")
const {check} = require("express-validator") 
const controller = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware")

const router = new Router();

router.post("/registration", [
  check("username", "Имя пользователя не может быть пустым").notEmpty(),
  check("password", "Пароль должен быть больше 4 и меньше 10 символов").isLength({
    min: 4, max: 10
  })
],controller.registration)
router.post("/login", controller.login)
router.get("/users", authMiddleware, controller.getUsers)

module.exports = router