const mongoose = require("mongoose");
require("dotenv").config();

// Replace this with your MONGOURI.
const MONGOURI =
  "mongodb+srv://oexp:IIsGlHFA366YuQMP@cluster0.veiz0.mongodb.net/esm?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("useFindAndModify", false);
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
