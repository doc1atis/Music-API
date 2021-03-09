const express = require('express')
const mongoose = require('mongoose')
const app = express()
try {
    await mongoose.connect(
        'mongodb://localhost:27017/test',
        { useNewUrlParser: true }
    );
} catch (error) {
    
}
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App is listening or port: ${PORT}`);
})