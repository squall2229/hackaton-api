const Router = require("express")
// const multer  = require('multer')

const router = new Router()
// const uploader = multer({dest: '../uploads' }).single("audio")
const uploaderController = require("../controllers/uploaderController")
const uploader = require("../middlewares/uploaderMiddleware")


router.post("/" , uploader, uploaderController.upload)

module.exports = router