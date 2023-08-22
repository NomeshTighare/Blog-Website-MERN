const mongoose = require("mongoose")

const connectDatabase =async  () => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase
