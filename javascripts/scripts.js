$(function(){

  for (var i = 0; i < 100; i += 1) {
    $('#photos').append("<li class='photo_item'>photo "+i+"goes here</li>")
  }

  $('#photos').sortable();


})