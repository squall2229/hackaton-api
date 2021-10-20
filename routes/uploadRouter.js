const Router = require("express")
const uploaderController = require("../controllers/uploaderController")
// const uploder = require("../middlewares/uploaderMiddleware")

const router = new Router()

router.post("/", uploaderController.upload)

module.exports = router