(function( $ ) {
	 var currentLeftValue = 0;
  $.fn.slider = function() {
  	
  		var elementsList = $('.carousel-list');
	    var pixelsOffset = 125;
	   
	    var elementsCount = elementsList.find('li').length;
	    var minimumOffset = 0;
	    var maximumOffset = (elementsCount -5) * (- pixelsOffset);

  		this.click(function(e) {

  		var clicked = $(e.target);
  		var definition = $(clicked).attr('data-action')

  		if (definition == 'left') {

  			if (currentLeftValue != minimumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        		
        	} 
  			
  		} else if (definition == 'right') {

  			if (currentLeftValue != maximumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
       		 	
       		} 
  		}
  	});
  	return this;
  };
})(jQuery);

   