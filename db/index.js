const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://surenphoenix13:Lucifer57MDB@cluster0.zmsxeyd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db is connected!");
  })
  .catch((ex) => {
    console.log("db connection failed: ", ex);
  });
