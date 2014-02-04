var images;

var getAccessToken = function(){
  return window.location.hash.slice(14)
}

var getINSTAGRAM_URL = function(){
  return "https://api.instagram.com/v1/tags/cats/media/recent?access_token="+getAccessToken()+"&scope=likes+comments+relationships&callback=?"
}

var templates = {
  // this is just like an ERB template
  photo_item: function(locals){
    // locals is like a hash of all my @instance variables in my controller method
    var html_array = ["<li id='photo_item_",locals.i,"' class='photo_item'>",
                          "<img class='photo_image'src='", locals.imageUrl,"'/>",
                        "</li>"];
    return html_array.join("")
  }
}

var fetchImages = function(){
  $.getJSON(getINSTAGRAM_URL(),function(ajax_response){
    // console.log(ajax_response)
    images = ajax_response.data

    appendImages(images)

  })
}

var appendImages = function(images){
  var total_images = images.length

  for (var i = 0; i < total_images; i += 1) {

    $('#photos').append(
          templates.photo_item({
              // this is how ERB views 
                i: i,
                imageUrl: images[i].images.standard_resolution.url
        })
    )
  }

  $('#photos').sortable();
}

$(function(){

  fetchImages();

})