// Importación de librería necesaria
const mongoose = require("mongoose");

// Creación del esquema Carrito
const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        default: 1
      },
    },
  ],
});

const Carrito = mongoose.model("Carrito", cartSchema);

// Exportación del modelo
module.exports = Carrito;