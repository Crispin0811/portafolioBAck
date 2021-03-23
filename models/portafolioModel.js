const { Sequelize } = require("sequelize");

const db = require("../config/db");

const Portafolios = db.define(
  "Portafolios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: Sequelize.STRING(100),
    },
    descripcion: {
      type: Sequelize.STRING(10000),
    },
    urlGit: {
      type: Sequelize.STRING(100),
    },
    urlImg: {
      type: Sequelize.STRING(250),
      defaultValue:
        "https://res.cloudinary.com/duzf4c5dl/image/upload/v1615930802/Portafolio/imagenes/images_hkctgg.png",
    },
    tipo: {
      type: Sequelize.STRING(100),
    },
  },
  {
    tableName: "portafolios",
  }
);

module.exports = Portafolios;
