// Importación del modelo Producto
const Product = require("../models/Producto");

// Obtención de todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json({ Productos: products });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "No se pudo obtener los productos" });
  }
};

// Creación de un producto
exports.createProduct = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      categoria, // Puede ser sólo "Hardware", "Software" o "Servicios profesionales"
      precio, // Tarifa establecida en USD (dólares estadounidenses)
    } = req.body;
    const imagen = req.file ? req.file.path : '';
    const newProduct = await Product.create({
      nombre,
      descripcion,
      categoria,
      precio,
      imagen
    });
    res.json({ newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error al intentar crear el producto" });
  }
};

// Obtención de un producto por su id
exports.getOneProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json({ Producto: product });
  } catch (error) {
    return res.status(500).json({ message: "No se pudo obtener el producto" });
  }
};

// Actualización del producto por su id
exports.updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, categoria, precio } = req.body;
    const imagen = req.file ? req.file.path : '';
    const productUpdated = await Product.findByIdAndUpdate(
      id,
      {
        nombre,
        descripcion,
        categoria,
        precio,
        imagen,
      },
      { new: true }
    );
    res.json({ productUpdated });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Hubo un error al intentar actualizar el producto" });
  }
};

// Eliminación de producto por su id
exports.deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const productDeleted = await Product.findByIdAndDelete(id);
    return res.json({ productDeleted });
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error al intentar eliminar el producto",
      error,
    });
  }
};
