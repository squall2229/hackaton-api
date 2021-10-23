const UploaderService = require("../services/UploaderService");

class UploaderController {
  async upload(req, res) {
    try {
      // const {file} = req

      // if (file) {
      //   const data = UploaderService.getTextByAudio(file);

      //   return res.json({ success: 1, data })
      // } 
      
      // return res.status(400).json({ message: "Нет файла", success: 0 })
      const data = UploaderService.getTextByAudio();

      return  res.json({ success: 1, data })
      
    } catch (error) {
      return res.status(400).json({ message: "Ошибка при сохранении файла", success: 0 })
    }
  }
}

module.exports = new UploaderController()