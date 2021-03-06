const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const slug = require("slug");
const shortid = require("shortid");

const Portafolio = new Schema({
  titulo: {
    type: String,
    trim: true,
  },
  portadaImg: {
    type: String,
    trim: true,
  },
  descripcion: [
    {
      principal: {
        type: String,
        trim: true,
      },
      secundario: {
        type: String,
        trim: true,
      },
    },
  ],
  urlGit: {
    type: String,
    trim: true,
  },
  imgs: [
    {
      type: String,
      trim: true,
    },
  ],
  tipo: {
    type: String,
    trim: true,
  },
  tecnologias: [
    {
      back: [
        {
          type: Boolean,
          default: false,
        },
      ],
      frond: [
        {
          type: Boolean,
          default: false,
        },
      ],
      fullStack: [
        {
          type: Boolean,
          default: false,
        },
      ],
    },
  ],

  url: {
    type: String,
    trim: true,
  },
});

Portafolio.pre("save", async function (next) {
  const url = `${slug(this.titulo)}-${shortid.generate()}`;
  this.url = url;

  next();
});

module.exports = mongoose.model("Portafolio", Portafolio);
