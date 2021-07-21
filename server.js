const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
require("dotenv").config({ path: "./config/.env" });
app.use(express.json());
app.use("/user/api", require("./router/User"));
connectDB();
app.listen(process.env.PORT, (err) => {
  err
    ? console.log("there is an error")
    : console.log(`the server is running well on ${process.env.PORT}`);
});
