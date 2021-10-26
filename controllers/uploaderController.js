const UploaderService = require("../services/UploaderService");


class UploaderController {
  async upload(req, res) {
    try {
      const data = await UploaderService.getTextByAudio(req.file);

      if (data) {
        return res.json({ success: 1, data })
      } 

      return res.status(400).json({ success: 0, message: "Что-то пошло не так" })
    } catch (error) {
      return res.status(400).json({ message: error.message, success: 0 })
    }
  }
}

module.exports = new UploaderController()