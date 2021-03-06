
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const getPortafolios = (req, res) => {
  res.send("ok");
};
const addPortafolio = async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, "Portafolio/imagenes");

  if (req.method === "POST") {
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }

    return res.json({
      mensaje: "ok guardado",
      data: urls,
    });
  } else {
    return res.json({
      mensaje: "falla guardado",
      // data: urls,
    });
  }
};

module.exports = {
  getPortafolios,
  addPortafolio,
};
