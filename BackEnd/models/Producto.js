// Importación de librería necesaria
const mongoose = require("mongoose");

// Creación del esquema Producto
const productSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String
    },
    categoria: { 
      type: String,
      enum:['Hardware', 'Software', 'Servicios profesionales'],
      required: true
    },
    precio: {
      type: Number, // En USD
      default: 0
    },
    imagen: {
      type: String
    },
    // slug: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Producto', productSchema);

// Exportación del modelo
module.exports = Product;