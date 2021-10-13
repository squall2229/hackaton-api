const multer = require("multer")

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    const fileExt = file.originalname.split(".").pop();
    const filename = `${new Date().getTime()}.${fileExt}`;
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "audio/mp3" || file.mimetype === "audio/mpeg") {
    cb(null, true);
  } else {
    cb(
      {
        message: "Unsupported File Format",
      },
      false
    );
  }
};

const uploader = multer({
  storage,
  fileFilter,
}).single("audio")

module.exports = (req, res, next) => {
  uploader(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err.message })
    }

    next()
  })
}