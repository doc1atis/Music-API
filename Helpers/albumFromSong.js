module.exports = (albums,songId) => {
    for (let i = 0; i < albums.length; i++){
        let album = albums[i]
        let songs = album.songs
        for (let k = 0; k < songs.length; k++){
            let song = songs[k]
            if (song._id.toString() === songId) {
                return album
            }
        }
    }
    return {}
}