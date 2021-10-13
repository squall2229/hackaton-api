const express = require("express")
const uploadRouter = require("./routes/uploadRouter")
const {port} = require("./config")

const app = express()

app.use(express.json())
app.use("/upload", uploadRouter)

const start = async () => {
  try {
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