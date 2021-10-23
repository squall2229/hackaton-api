// const path = require("path");
// const ffmpeg = require('fluent-ffmpeg')
// const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// const ffprobePath = require('@ffprobe-installer/ffprobe').path;

const UploaderService = require("../services/UploaderService");

// ffmpeg.setFfmpegPath(ffmpegPath);
// ffmpeg.setFfprobePath(ffprobePath);

// const command = ffmpeg();

class UploaderController {
  upload(req, res) {
    try {
    //  command
    //   .input(path.join(`${__dirname  }/../uploads/${req.file.originalname}`))
    //   .save(path.join(`${__dirname  }/../uploads/${req.file.originalname.split(".").pop()}.wav`))

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