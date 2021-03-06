const express = require("express");
const app = express();
const upload = require("../config/multer");


const portafolioController = require("../controllers/portafolioController");

app.post(
  "/addPortafolio",
  upload.array("imgs"),
  portafolioController.addPortafolio
);
app.get("/getPortafolios", portafolioController.getPortafolios);

module.exports = app;
