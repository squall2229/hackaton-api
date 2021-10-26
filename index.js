const express = require("express")
const http = require("http")
const path = require("path")
const cors = require('cors')
const uploadRouter = require("./routes/uploadRouter")
const downloadRouter = require("./routes/dowloadRouter")

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.static('public'));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization")

  next()
})
app.use('/', express.static(path.join(`${__dirname  }public`)))
app.use("/upload", uploadRouter)
app.use("/download", downloadRouter)

const server = http.createServer(app);

const start = async () => {
  try {
    server.listen(3000, () => {
      // eslint-disable-next-line no-console
      console.log(`server started on port ${3000}`)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

start()