const express = require('express')
const { upload,findSong,findAlbumFromSong } = require('../Controllers/songsController')
const auth = require('../Middlewares/auth')
const router = express.Router()
router.post("/upload", auth, upload)
router.get("/findsong", findSong)
router.post("/findalbum", findAlbumFromSong)
module.exports = router