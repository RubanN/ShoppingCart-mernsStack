require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MonngoDB connection SUCCESS");
    } catch (err) {
        console.log("MonngoDB Error");
        process.exit(1);
    }
}
module.exports = connectDB;