// Importación de librería necesaria
const mongoose = require("mongoose");

// Creación del esquema Usuario
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Carrito",
        default: [],
      },
    ],
    // country: {
    //   type: String,
    //   default: ''
    // },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    // receipts: {
    //   type: Array,
    //   default: []
    // }
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model("Usuario", userSchema);

// Exportación del modelo
module.exports = Usuario;
