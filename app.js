const dotenv = require('dotenv')
const express = require('express')

// Internal import
const connectToDB = require('./Helpers/DB')
const usersRouter = require('./Routes/usersRouter')

dotenv.config()
connectToDB()
app = express()
app.use(express.json())
app.use('/api/users',usersRouter)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is listening or port: ${PORT}`);
}) 