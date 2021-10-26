const UploaderService = require("../services/UploaderService");


class UploaderController {
  async upload(req, res) {
    try {
      const data = await UploaderService.getTextByAudio(req.file);
      return res.json({ success: 1, data })
    } catch (error) {
      return res.status(400).json({ message: "Ошибка при сохранении файла", success: 0 })
    }
  }
}

module.exports = new UploaderController()