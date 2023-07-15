const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/review_app", { useNewUrlParser : true, useUnifiedTopology: true}).
then((result) => {
    console.log("database is connected successfully");
})
.catch((error) => {
    console.log(error);
})
