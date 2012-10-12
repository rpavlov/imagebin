$(document).ready(function() {

	$('#container').imagesLoaded(function(){
	  $('#container').masonry({
	    itemSelector : '.image_link',
	    columnWidth:240,
	    isAnimated: true,
	    isFitWidth:true,
	    gutterWidth: 0
	  });
	});

});