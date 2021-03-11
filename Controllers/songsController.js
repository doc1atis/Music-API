const Artist = require('../Models/Artist')
const albumFromSong = require('../Helpers/albumFromSong')
exports.upload = async (req, res) => {
   try {
       let artist = new Artist({
           name: req.body.name,
           albums: [{
               title: req.body.title,
               songs: [{
                   title: req.body.title,
                   coverImageUrl: req.body.coverImageUrl,
                   audioUrl:req.body.audioUrl
               }],
           }],
           uploadedBy:req.id
       })
       artist = await artist.save()
       res.status(201).json(artist)
   } catch (error) {
       res.status(400).json(error)
   }
}
// 60492195a148434aadfe9ef4
exports.findSong = async (req, res) => {
    try {
        const result = await Artist.findOne({ 'albums.songs.title': 'Live life' })
        
        if (result) {
            res.status(200).json({artistId:result._id,song:"uu"})
        } else {
            res.status(200).json({})
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}
exports.findAlbumFromSong = async (req, res) => {
    try {
        let artist = await Artist.findOne({ 'albums.songs._id': '60492195a148434aadfe9ef4' })
        if (artist) {
            let album = albumFromSong(artist.albums, '60492195a148434aadfe9ef4')
            res.status(200).json(album)
        } else {
            res.status(200).json({})
        }
        
    } catch (error) {
        res.status(400).json(error)
    }
}