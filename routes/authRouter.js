const Router = require("express")
const {check} = require("express-validator") 
const controller = require("../controllers/authController");
// const roleMiddleWare = require("../middlewares/roleMiddleware")

const router = new Router();

router.post("/registration", [
  check("username", "Имя пользователя не может быть пустым").notEmpty(),
  check("password", "Пароль должен быть больше 4 и меньше 10 символов").isLength({
    min: 4, max: 10
  })
],controller.registration)
router.post("/login", controller.login)
router.get("/users", controller.getUsers)

// roleMiddleWare(["USER"])

module.exports = router