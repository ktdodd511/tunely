/************
 * DATABASE *
 ************/
var db = require("../models");



// GET /api/albums
function index(req, res) {
  db.Album.find(function(err, album) {
    if (err) {
      return console.log("error: " + err);
    }
    res.json(album);
  });
};

function create(req, res) {
  res.json(album);
  console.log(album);
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
