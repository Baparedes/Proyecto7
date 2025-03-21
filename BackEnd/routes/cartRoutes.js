// Importación de librerías necesarias y controladores
const express = require("express");
const {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
} = require("../controllers/cartController");
const auth = require("../middleware/authorization");

const cartRouter = express.Router();

// Rutas de las acciones del carrito
cartRouter.get("/", auth, getCart);
cartRouter.post("/", auth, addToCart);
cartRouter.delete("/:productId", auth, removeFromCart);
cartRouter.delete("/", auth, clearCart);

// Exportación de rutas
module.exports = cartRouter;
