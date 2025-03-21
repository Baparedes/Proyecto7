const mongoose = require("mongoose");

// Conexión a base de datos en la nube (MongoDB Atlas)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to the database");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB