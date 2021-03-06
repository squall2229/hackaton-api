const Router = require("express")
const DownloadController = require("../controllers/downloadController")

const router = new Router()

router.post("/", DownloadController.download)

module.exports = router