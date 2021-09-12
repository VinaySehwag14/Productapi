const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

dotenv.config();
app.use(express.json);

mongoose
  .connect("mongodb://localhost:27017/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);

app.listen(port, () => {
  console.log(`Serever is running and listening on ${port} port`);
});
