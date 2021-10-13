class UploaderController {
  async upload(req, res) {
    try {
      const {file} = req

      if (file) {
        res.json({ message: "success" })
      }
    } catch (error) {
      return res.status(400).json({ message: "Ошибка при сохранении файла" })
    }
  }
}

module.exports = new UploaderController()