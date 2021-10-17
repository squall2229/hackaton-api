const express = require("express")
const path = require("path")
const mongoose= require("mongoose")
const authRouter = require("./routes/authRouter")
const uploadRouter = require("./routes/uploadRouter")
const {port, mongoUrl} = require("./config")

const app = express()

app.use(express.json())
app.use(express.static('public'));
app.use('/', express.static(path.join(`${__dirname  }public`)))
app.use("/auth", authRouter)
app.use("/upload", uploadRouter)

const start = async () => {
  try {
    await mongoose.connect(mongoUrl)
    
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`server started on port ${port}`)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

start()