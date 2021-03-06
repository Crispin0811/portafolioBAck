const express = require("express");
const app = express();
const bodyParser = require("body-parser");


// BASE DE DATOS
require("./config/db");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// RUTAS
app.use("/api", require("./routes/todosRoute"));

app.listen(3000, (e) => {
  if (e) return "Hubo un error";
  console.log("Coriendo en puerto 3000");
});
