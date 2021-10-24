const path = require("path");
const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;

const { default: axios } = require("axios");
// const mockData = require("../__mock__/text.json");

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

const command = ffmpeg();

// {
//   "r": [
//       {
//           "response_audio_url": "/media/dc4dd9db-ef4e-42d2-a5f7-f62d19609143.wav",
//           "response_code": 0,
//           "response": [
//               {
//                   "text": "в речке сидел господин не красавец но недурной наружности",
//                   "time": 13.393
//               }
//           ]
//       }
//   ]
// }

class UploaderService {
  static async getTextByAudio(file) {
    command
      .input(path.join(`${__dirname  }/../uploads/${file.originalname}`))
      .save(path.join(`${__dirname  }/../uploads/${file.originalname.split(".")[0]}.wav`))


     try {

      // const response = await axios.post("http://localhost:8888/asr")
      // const {text} = response.data.r[0].response[0]
      const responseForFrontend = await axios.post("http://localhost:5000/", {
        text: "Тестовое предложение очень клево все"
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      return responseForFrontend.data
     } catch (error) {
       console.log(error)
     }
  }
}

module.exports = UploaderService