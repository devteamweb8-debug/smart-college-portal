require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const url = process.env.DB_URL;
        await mongoose.connect(url)
        .then(() => {
            console.log("DB is connected");
        })
        .catch((err) => {
            console.log(err.message);
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;