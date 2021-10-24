const path = require("path");
const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;

const mockData = require("../__mock__/text.json");

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

const command = ffmpeg();

class UploaderService {
  static getTextByAudio(file) {
    command
      .input(path.join(`${__dirname  }/../uploads/${file.originalname}`))
      .save(path.join(`${__dirname  }/../uploads/${file.originalname.split(".")[0]}.wav`))

      // 1 get wav
      // 2 send to sova => text
      // 3 send text => hack_DS => json
      // 4 json => front

    return mockData
  }
}

module.exports = UploaderService