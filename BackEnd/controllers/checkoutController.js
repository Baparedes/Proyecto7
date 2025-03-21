// Importación de stripe y los modelos necesarios
const Stripe = require("stripe");
// const Usuario = require("../models/Usuario");
// const Carrito = require("../models/Carrito");

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
          images: [item.product.imagen], // Opcional
        },
        unit_amount: Math.round(item.product.precio * 100), // Stripe usa centavos
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.REACT_BASE_URL_S}`, // Página de éxito
      cancel_url: `${process.env.REACT_BASE_URL_C}`, // Página de cancelación
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creando sesión de Stripe:", error);
    res.status(500).json({ error: "Error al procesar el pago" });
  }
};
//   const userId = req.user.id;
//   const foundUser = await Usuario.findOne({ _id: userId });
//   const foundCart = await Carrito.findById(foundUser.cart).populate({
//     path: "products",
//   });

//   // Creación de line_items para la sesión de Stripe según productos en el carro
//   const line_items = foundCart.products.map((e) => {
//     return {
//       price: e.priceId,
//       quantity: e.quantity,
//     };
//   });

//   // Creación de sesión de checkout en Stripe
//   const session = await stripe.checkout.sessions.create({
//     line_items,
//     payment_method_types: ['card'],
//     mode: "payment",
//     success_url: `${process.env.REACT_BASE_URL_S}`,
//     cancel_url: `${process.env.REACT_BASE_URL_C}`,
//     customer_email: foundUser.email,
//   });

//   // Envía la url de la sesión y la sesión
//   res.json({
//     session_url: session.url,
//     session: session,
//   });
// };

// // Función que permite crear una orden
// exports.createOrder = async (req, res) => {
//   const sig = req.headers["stripe-signature"];
//   const endpointSecret = process.env.STRIPE_WH_SIGNING_SECRET;

//   let event;

//   try {
//     // Se construye el evento de Stripe
//     event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send("Hubo un problema relacionado al evento");
//     return;
//   }

//   // Según el tipo de evento
//   switch (event.type) {
//     case "charge.succeeded":
//       const paymentIntent = event.data.object;
//       const email = paymentIntent.billing_details.email;
//       const receiptURL = paymentIntent.receipt_url;
//       const receiptID = receiptURL
//         .split("/")
//         .filter((item) => item)
//         .pop();

//       const amount = paymentIntent.amount;

//       const date_created = paymentIntent.created;

//       // Actualiza el usuario con los datos del recibo
//       await Usuario.findOneAndUpdate(
//         { email },
//         {
//           $push: {
//             receipts: {
//               receiptURL,
//               receiptID,
//               date_created,
//               amount,
//             },
//           },
//         },
//         { new: true }
//       );

//       break;
//     default:
//       // Si el tipo de evento no se maneja, muestra el tipo de evento
//       console.log(`Unhandled event type ${event.type}`);
//   }
//   res.send();
// };

// // Función que permite crear un carrito
// exports.createCart = async (req, res) => {
//   // Crea un carrito con los datos de la solicitud
//   const newCart = await Carrito.create(req.body);

//   // Envía el nuevo carrito en la respuesta
//   res.json({
//     cart: newCart,
//   });
// };

// // Función que permite obtener un carrito
// exports.getCart = async (req, res) => {
//   const userId = req.user.id;

//   const foundUser = await Usuario.findOne({ _id: userId });

//   // Encuentra el carrito del usuario en la base de datos
//   const foundCart = await Carrito.findOne({ _id: foundUser.cart });

//   res.json({
//     cart: foundCart,
//   });
// };

// // Función que permite editar un carrito
// exports.editCart = async (req, res) => {
//   const userId = req.user.id;

//   const foundUser = await User.findOne({ _id: userId });

//   const { products } = req.body;

//   // Actualiza el carrito con los nuevos datos de los productos
//   const updatedCart = await Carrito.findByIdAndUpdate(
//     foundUser.cart,
//     {
//       products,
//     },
//     { new: true }
//   );

//   // Envía un mensaje y el carrito actualizado en la respuesta
//   res.json({
//     msg: "Tu carrito fue actualizado",
//     updatedCart,
//   });
// };
