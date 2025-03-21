// Importación del modelo Carrito
const Cart = require("../models/Carrito");
const Product = require("../models/Producto");
const User = require("../models/Usuario");

// Obtención del carrito
exports.getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    let cart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );

    if (!cart) {
      return res.status(404).json({ msg: "Carrito vacío" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.log("Error al obtener el carrito: ", error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

// Adición de producto al carrito
exports.addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    if (!productId) {
      return res.status(400).json({ msg: "Se requiere el ID del producto" });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        products: [{ product: productId, quantity: quantity || 1 }],
      });
    } else {
      const productIndex = cart.products.findIndex(
        (item) => item.product?.toString() === productId.toString()
      );

      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity || 1;
      } else {
        cart.products.push({ product: productId, quantity: quantity || 1 });
      }
    }

    await cart.save();

    const cartWithProducts = await Cart.findById(cart._id).populate("products.product");

    res.status(200).json(cartWithProducts);
  } catch (error) {
    console.log("Error al agregar al carrito:", error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

// Eliminación de producto por su id
exports.removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ msg: "Carrito no encontrado" });
    }

    cart.products = cart.products.filter(
      (item) => item.product.toString() !== productId
    );

    await cart.save();
    res.status(200).json({ msg: "Producto eliminado del carrito", cart });
  } catch (error) {
    console.log("Error al eliminar producto del carrito:", error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

// Vaciar carrito
exports.clearCart = async (req, res) => {
  try {
    const userId = req.user.id;
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ msg: "Carrito no encontrado" });
    }

    cart.products = [];
    await cart.save();
    res.status(200).json({ msg: "Carrito vaciado" });
  } catch (error) {
    console.log("Error al vaciar el carrito:", error);
    res.status(500).json({ msg: "Error en el servidor" });
  }
};
