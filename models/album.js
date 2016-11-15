var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Song = require('./song');

var genreSchema = new Schema ({
  name: String
});

var albumSchema = new Schema ({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [String],
  songs: {type: Schema.Types.ObjectId, ref: 'Song'}
});

var Album = mongoose.model('Album', albumSchema);
module.exports = Album;
