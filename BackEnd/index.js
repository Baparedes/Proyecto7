// Importación de las librerías necesarias y rutas
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const app = express();

require("dotenv").config();

const productRouter = require("./routes/productRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const cartRouter = require("./routes/cartRoutes.js");
const paymentRouter = require("./routes/paymentRoutes.js");
const port = process.env.PORT || 4000;

connectDB();

// Middlewares
app.use(cors({ origin: ['http://localhost:5173', 'https://proyecto7-frontend-production.up.railway.app'] }));
app.use(express.json());

app.use("/product", productRouter);
app.use("/user", userRouter);
app.use("/cart", cartRouter);
app.use("/payments", paymentRouter);

// Asignación de puerto para servidor
app.listen(port, () => {
  console.log(`el servidor está corriendo en el puerto ${port}`);
});
