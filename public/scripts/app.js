/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */

allAlbums = [];

$(document).ready(function() {
  console.log('app.js loaded!');

var $albums = $('#albums');


// get the albums
$.ajax({
  method: 'GET',
  url: '/api/albums',
  success: handleSuccess,
  error: handleError
});

$('.form-horizontal').on('submit', function(e) {
  e.preventDefault();
  console.log('New album created', $(this).serialize());
  $.ajax({
    method: 'POST',
    url: '/api/albums',
    data: $(this).serialize(),
    success: newAlbumSuccess,
    error: newAlbumError
  });
  $(this).trigger("reset");
});

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  console.log('rendering album:', album);
  album.forEach(function(album) {
    var source = $('#album-template').html();
    var template = Handlebars.compile(source)
    var albumHtml = template(album);
    $albums.prepend(albumHtml);
  });
}


function handleSuccess(albums) {
  renderAlbum(albums);
}


function handleError(err) {
  console.log(err);
}

function newAlbumSuccess(json) {
  $('.form-horizontal input').val('');
  allAlbums.push(json);
  renderAlbum(json);
}

function newAlbumError() {
  console.log("error: " + "new album not created");
}


});
