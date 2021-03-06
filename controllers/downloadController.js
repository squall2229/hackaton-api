const DownloaderService = require("../services/DownloaderService")

class DownloadController {
  static async download(req, res) {
    try {
      const buffer = await DownloaderService.download({
        annotation: req.body.annotation,
        tags: req.body.tags,
        text: req.body.text,
      })

      // res.setHeader('Content-Disposition', 'attachment; filename=MyDocument.docx');
      res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
      res.send(buffer);
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  }
}

module.exports = DownloadController