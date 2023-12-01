const mongoose = require("mongoose");

// const uri ="mongodb+srv://abhi07:abhiyadav07@cluster0.vn1ptrs.mongodb.net/?retryWrites=true&w=majority";
// "mongodb://vetflow:vetflow%232023@65.1.93.205:27017/reference?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const uri = process.env.MONGO;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log("Mongo Error: ", error);
  }
};

module.exports = connectDB;
