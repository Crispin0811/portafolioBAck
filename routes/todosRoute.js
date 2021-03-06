const express = require("express");
const app = express();

app.use("/", require("./portafolioRoute"));

module.exports = app;
