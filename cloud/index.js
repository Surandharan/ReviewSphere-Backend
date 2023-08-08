const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dyfmb1chj",
  api_key: "115976461266831",
  api_secret: "tShyO86YhDc2EJ1959xOx1hIBgA",
  secure: true,
});

module.exports = cloudinary;
