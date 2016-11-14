/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleAlbums = [];
sampleAlbums.push({
             artistName: 'Ladyhawke',
             name: 'Ladyhawke',
             releaseDate: '2008, November 18',
             genres: [ 'new wave', 'indie rock', 'synth pop' ]
           });
sampleAlbums.push({
             artistName: 'The Knife',
             name: 'Silent Shout',
             releaseDate: '2006, February 17',
             genres: [ 'synth pop', 'electronica', 'experimental' ]
           });
sampleAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ]
           });
sampleAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ]
           });
/* end of hard-coded data */


var template;
var $albums;

$(document).ready(function() {
  console.log('app.js loaded!');

$albums = $('#albums');

var source = $('#album-template').html();
template = Handlebars.compile(source);



// this function takes a single album and renders it to the page
function renderAlbum(album) {
  album.forEach(function(album) {
  console.log('rendering album:', album);
  var albumHtml = template(album);
  $albums.prepend(albumHtml);
  });
}

// get the albums
$.ajax({
  method: 'GET',
  url: '/api/albums',
  success: handleSuccess,
  error: handleError
});


function handleSuccess(albums) {
  renderAlbum(albums);
}


function handleError(err) {
  console.log(err);
}


});
