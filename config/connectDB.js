const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://nad:Cilwazoldik1881993@cluster0.dtjp6.mongodb.net/RESTApicheckpoint?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DataBase connect seccessfully");
  } catch (error) {
    console.log("DataBase connection failed");
  }
};

module.exports = connectDB;
