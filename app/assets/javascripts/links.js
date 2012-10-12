$(document).ready(function() {

	$('#container').imagesLoaded(function(){
	  $('#container').masonry({
	    itemSelector : '.image_link',
	    columnWidth:240,
	    isAnimated: true,
	    isAnimatedFromBottom: true,
	    gutterWidth: 0
	  });
	});

});