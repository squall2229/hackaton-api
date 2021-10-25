const path = require("path");
// const FormData = require("form-data")
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

// `Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.

//         По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен`

class UploaderService {
  static async getTextByAudio(file) {
     try {
      const fileWavName = path.join(`${__dirname  }/../uploads/${file.originalname}`)

      // await Promise.resolve(() => command
      //   .input(path.join(`${__dirname  }/../uploads/${file.originalname}`))
      //   .toFormat("wav")
      //   .format("wav")
      //   .audioChannels(1)
      //   .save(fileWavName))     

      const responseForFrontend = await axios.post("http://localhost:3333/", {
        "wav": `${fileWavName}`
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });

      const response = await axios.post("http://localhost:5000/", {
        "text": responseForFrontend.data.text
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });

      return response.data
     } catch (error) {
       console.log(error)
     }
  }
}

module.exports = UploaderService