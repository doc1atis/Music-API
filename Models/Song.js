// ------ User body -----
// 1- userName: string
// 2- email: string
// 3- likes: [songIds]
// 4- password: string




// ----- song body ---
// 1- title: string
// 2- listens:[userIds]
// 3- likes: [userIds]
// 4- dislikes:[userIds]
// 5- coverImageUrl:string
// 6- audioUrl:string
// 7- artist: artistId --> must be created first before song
// 8- uploadedBy: userId --> must be created first before song
// 9- uploadDate: date
// 9- creationDate: date
// 10- album: albumId --> must be created first before song



// ----- album body ------

// 1- title: string
// 2- artist: artistId --> must be created first before album
// 3- songs: [songIds]
// 4- createdBy: userId
// 5- uploaddate: date
// 6- creationDate: date


// ----- Artist body------
// 1- name: string
// 2- albums: [albumIds]


// --- playlist body-----
// 1- title: string
// 2- songs: [songIds]
// 3- createdBy: userId
// 4- creationDate: date


// ----uploading a single ------

// 1- create or find an artist
// 2- create an album with single tile as its title
// 3- update artist albums
// 4- create a song


// ----uload an album-----
// 1- create or find an artist
// 2- create an album
// 3- add songs to album through updates