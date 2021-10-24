const Router = require("express")

const router = new Router()
const uploaderController = require("../controllers/uploaderController")
const uploader = require("../middlewares/uploaderMiddleware")


router.post("/" , uploader, uploaderController.upload)

module.exports = router