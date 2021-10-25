const DownloaderService = require("../services/DownloaderService")

class DownloadController {
  static async download(req, res) {
    try {
      const document = await DownloaderService.download({
        annotation: req.body.annotation,
        tags: req.body.tags,
        text: req.body.text
      })

      res.setHeader('Content-Disposition', 'attachment; filename=MyDocument.docx');
      res.download(Buffer.from(document));
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  }
}

module.exports = DownloadController