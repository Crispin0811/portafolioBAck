// const mongoose = require("mongoose");
// let Schema = mongoose.Schema;
// const slug = require("slug");
// const shortid = require("shortid");

// const Portafolio = new Schema({
//   titulo: {
//     type: String,
//     trim: true,
//   },
//   portadaImg: {
//     type: String,
//     trim: true,
//     default: "https://res.cloudinary.com/duzf4c5dl/image/upload/v1615930802/Portafolio/imagenes/images_hkctgg.png",
//   },
//   descripcion: [
//     {
//       principal: {
//         type: String,
//         trim: true,
//       },
//       secundario: {
//         type: String,
//         trim: true,
//       },
//     },
//   ],
//   urlGit: {
//     type: String,
//     trim: true,
//   },
//   imgs: [
//     {
//       type: String,
//       trim: true,
//     },
//   ],
//   tipo: {
//     type: String,
//     trim: true,
//   },
//   tecnologias: [
//     {
//       back: [
//         {
//           type: Boolean,
//           default: false,
//         },
//       ],
//       frond: [
//         {
//           type: Boolean,
//           default: false,
//         },
//       ],
//       fullStack: [
//         {
//           type: Boolean,
//           default: false,
//         },
//       ],
//     },
//   ],

//   url: {
//     type: String,
//     trim: true,
//   },
// });

// Portafolio.pre("save", async function (next) {
//   const url = `${slug(this.titulo)}-${shortid.generate()}`;
//   this.url = url;

//   next();
// });

// module.exports = mongoose.model("Portafolios", Portafolio);

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
      type: Sequelize.STRING,
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
