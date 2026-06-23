const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/image/");
  },

  filename: function (req, file, cb) {
    let imageNumber = 1
    cb(null, `${imageNumber++}`+ "-" + file.originalname );
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

