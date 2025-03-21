const  v2 = require('cloudinary');
const dotenv = require('dotenv');

const cloudinary = v2

dotenv.config();

exports.claudConfig = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});