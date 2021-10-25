const Router = require("express")
const DownloadController = require("../controllers/downloadController")

const router = new Router()

router.get("/", DownloadController.download)

module.exports = router