const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/img"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpge)$/)) {
      return cb(new Error("Error en el tipo de archivo."));
    }
    cb(null, true);
  },
});
module.exports = upload;
