const mongoose = require("mongoose")
require("dotenv").config({ path: "./config/.env" });
const connectDatabase =async  () => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URI)

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase
