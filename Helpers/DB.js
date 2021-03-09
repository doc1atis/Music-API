const mongoose = require('mongoose')
async function connectToDB() {
    const OPTIONS = {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }
    try {
    await mongoose.connect(process.env.DB_URI,OPTIONS);
    console.log(" olgy Connected to mongodb")
} catch (error) {
        console.log("olgy error connected to db")
        console.log(error);
}
}
module.exports = connectToDB