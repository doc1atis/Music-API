const dotenv = require('dotenv')
const express = require('express')
const auth = require('./Middlewares/auth')
// Internal import
const connectToDB = require('./Helpers/DB')
const usersRouter = require('./Routes/usersRouter')
const songsRouter = require('./Routes/songsRouter')

dotenv.config()
connectToDB()
app = express()
app.use(express.json())
app.use('/api/users', usersRouter)
app.use('/api/songs',songsRouter)
app.post("/api/debo",auth, (req, res) => {
    res.send(req.id)
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is listening or port: ${PORT}`);
}) 