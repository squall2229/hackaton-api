const express = require("express")
const path = require("path")
const cors = require('cors')
const uploadRouter = require("./routes/uploadRouter")
const mockData = require("./__mock__/text.json")

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'));
app.use('/', express.static(path.join(`${__dirname  }public`)))
app.use("/upload", uploadRouter)

app.post("/test", (req, res) => {
  res.json({ data: mockData })
})

app.get("/test", (req, res) => {
  res.json({ data: mockData })
})

const start = async () => {
  try {
      app.listen(3000, () => {
      // eslint-disable-next-line no-console
      console.log(`server started on port ${3000}`)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

start()