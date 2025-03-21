const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const claudConfig = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: claudConfig,
  params: {
    folder: "productos",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

exports.upload = multer({ storage });
