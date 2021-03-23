const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "variables.env" });

app.use(express.static("public"));

const db = require("./config/db");

require("./models/portafolioModel");

db.sync()
  .then(() => {
    console.log("CONECTADO A BASE DE DATOS");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let whiteList = [
  "http://localhost:8001",
  "https://crispin0811.github.io/kevinCG/",
];
let corsOpciones = {
  origin: function (origin, cb) {
    if (whiteList.indexOf(origin) !== -1) {
      cb(null, true);
    } else {
      cb(new Error("Erro con el cors"));
    }
  },
};

// RUTAS
app.use("/api", require("./routes/todosRoute"));

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

app.listen(port, host, (e) => {
  if (e) {
    console.log(e);
  }
  console.log("Coriendo en puerto 3000");
});
