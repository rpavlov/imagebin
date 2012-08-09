var $container = $('#container');
$container.imagesLoaded(function(){
  $container.masonry({
    itemSelector : '.image_link',
     gutterWidth: 1,
     columnWidth: function( containerWidth ) {
    return containerWidth / 5;
 	 }


  });
});