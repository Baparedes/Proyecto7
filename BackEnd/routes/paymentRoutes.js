const express = require("express");
const { createCheckoutSession } = require("../controllers/checkoutController");

const paymentRouter = express.Router();

paymentRouter.post('/checkout-session', createCheckoutSession)

module.exports = paymentRouter;
