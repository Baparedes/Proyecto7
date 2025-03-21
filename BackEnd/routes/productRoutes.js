// Importación de librerías necesarias y controladores
const express = require("express");
const { upload } = require("../middleware/upload");

const {
  getAllProducts,
  createProduct,
  updateProductById,
  deleteProductById,
  getOneProductById,
} = require("../controllers/productController");
// const auth = require("../middleware/authorization");
// const { addToCart } = require("../controllers/cartController");

const productRouter = express.Router();

// Rutas CRUD
productRouter.get("/obtener-productos", getAllProducts);
productRouter.post("/crear-producto", upload.single("imagen"), createProduct);
productRouter.get("/obtener-producto/:id", getOneProductById);
productRouter.put(
  "/actualizar-producto/:id",
  upload.single("imagen"),
  updateProductById
);
productRouter.delete("/eliminar-producto/:id", deleteProductById);

// Exportación de rutas
module.exports = productRouter;
