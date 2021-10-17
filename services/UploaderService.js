const mockData = require("../__mock__/text.json")

class UploaderService {
  static async getTextByAudio() {
    return mockData
  }
}

module.exports = UploaderService