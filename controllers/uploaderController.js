const User = require("../models/User")

class UploaderController {
  async upload(req, res) {
    try {
      const {file} = req

      if (file) {
        const user = await User.findById(req.user.id)

        user.file = file.path

        await user.save()
        res.json({ message: "success" })
      }
    } catch (error) {
      return res.status(400).json({ message: "Ошибка при сохранении файла" })
    }
  }
}

module.exports = new UploaderController()