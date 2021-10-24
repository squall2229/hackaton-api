const docx = require("docx")
// const testData = require("../__mock__/text.json")

const { Document, Packer, Paragraph, HeadingLevel, AlignmentType, TextRun } = docx;

class DownloaderService {
  static async download({
    annotation,
    tags,
    text
  }) {

    const tagsForDocument = tags.map((tag, index, arr) => new TextRun({
      text: `${tag}${arr.length !== index + 1 ? ", " : ""}`
    }))

    const doc = new Document({
      sections: [{
        children: [
          new Paragraph({
            text: annotation,
            heading: HeadingLevel.Heading2,
            color: "black",
            bold: true,
            alignment: AlignmentType.CENTER,
          }),

          new Paragraph({
            text: "\n Тэги:",
            children: tagsForDocument,
          }),

          new Paragraph({
            text: `\n ${text}`,
          }),
        ]
      }]
    })

    const b64string = await Packer.toBase64String(doc);
     
    return b64string
  }
}

module.exports = DownloaderService