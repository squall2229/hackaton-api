const path = require("path");
const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;

const mockData = require("../__mock__/text.json")

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

const command = ffmpeg();

class UploaderService {
  static getTextByAudio(file) {
    command
      .input(path.join(`${__dirname  }/../uploads/${file.originalname}`))
      .save(path.join(`${__dirname  }/../uploads/${file.originalname.split(".")[0]}.wav`))

    return mockData
  }
}

module.exports = UploaderService