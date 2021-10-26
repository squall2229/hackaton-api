const express = require("express")
const path = require("path")
const cors = require('cors')
const uploadRouter = require("./routes/uploadRouter")
const downloadRouter = require("./routes/dowloadRouter")

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.static('public'));
app.use('/', express.static(path.join(`${__dirname  }public`)))
app.use("/upload", uploadRouter)
app.use("/download", downloadRouter)

const start = async () => {
  try {
      const server = app.listen(3000, () => {
      // eslint-disable-next-line no-console
      console.log(`server started on port ${3000}`)
    })
    server.setTimeout(0)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

start()