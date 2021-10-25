const docx = require("docx")
// const fs = require("fs")
// const path = require('path')
// const testData = require("../__mock__/text.json")

const { Document, Packer, Paragraph, HeadingLevel, AlignmentType, TextRun } = docx;

class DownloaderService {
  static async download({
    annotation,
    tags,
    text,
    // fileName
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
            text: `\n ${text.replace(/[<LOC><PER><ORG>]/g, "")}`,
          }),
        ]
      }]
    })

    // Packer.toBuffer(doc).then((buffer) => {
    //   fs.writeFileSync(path.join(`${__dirname  }/${fileName}.docx`, buffer))
    // });

    const buffer = await Packer.toBuffer(doc)

    // const b64string = await Packer.toBase64String(doc);
     
    return buffer
  }
}

module.exports = DownloaderService