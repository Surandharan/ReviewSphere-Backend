require("express-async-errors");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/error");
const cors = require("cors");
require("dotenv").config();
require("./db");
const userRouter = require("./routes/user");
const actorRouter = require("./routes/actor");
const movieRouter = require("./routes/movie");
const reviewRouter = require("./routes/review");
const adminRouter = require("./routes/admin");
const { handleNotFound } = require("./utils/helper");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/actor", actorRouter);
app.use("/api/movie", movieRouter);
app.use("/api/review", reviewRouter);
app.use("/api/admin", adminRouter);
app.use("/*", handleNotFound);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
