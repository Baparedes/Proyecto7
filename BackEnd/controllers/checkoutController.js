// Importación de stripe y los modelos necesarios
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Función que permite crear una sesión de checkout en Stripe
exports.createCheckoutSession = async (req, res) => {
  try {
    const { cart } = req.body; // Recibir el carrito desde el frontend

    const lineItems = cart.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.product.nombre,
          images: [item.product.imagen], 
        },
        unit_amount: Math.round(item.product.precio * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.REACT_BASE_URL_S}`,
      cancel_url: `${process.env.REACT_BASE_URL_C}`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creando sesión de Stripe:", error);
    res.status(500).json({ error: "Error al procesar el pago" });
  }
};
