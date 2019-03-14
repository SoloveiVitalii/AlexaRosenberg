$('#trslphotos').on('shown.bs.modal', function (a, b,c) {
 var clickedImageUrl = a.relatedTarget.childNodes[0].src;
  displayPhotos(clickedImageUrl);
})
function displayPhotos(url) {
 console.log(url);
 $('.modal-body img').attr('src', url);
 $('#trslphotos').modal();
}