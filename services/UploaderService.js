const path = require("path");
// const FormData = require("form-data")
const ffmpeg = require('fluent-ffmpeg')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;

const { default: axios } = require("axios");
// const mockData = require("../__mock__/text.json");

ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

// const command = ffmpeg();


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
      const body  = JSON.stringify({
        "wav": `${fileWavName}`
      })
      
      const responseForFrontend = await axios.post("http://localhost:3333/", {
        body
      }, {
        headers: {
          "Content-Type": "application/json",
          // "Connection": "keep-alive",
          'Content-Length': Buffer.byteLength(body)
        }
      });
      console.log("response 3333", responseForFrontend.data.text)

      return responseForFrontend.data

      // const response = await axios.post("http://localhost:5000/", {
      //   "text": responseForFrontend.data.text
      // }, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Connection": "keep-alive"
      //   }
      // });
      // console.log("response 5000", response.data)

      // return response.data
     } catch (error) {
       console.log("error", error)

       throw new Error(error)
     }
  }
}

module.exports = UploaderService