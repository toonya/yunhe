(function($){

	"use strict";

	$('form').on('click', '#new_desc', function(e){
		e.preventDefault();
		var $new_item = $(this).closest('.changable-item').clone(),
			$input = $new_item.find('input'),
			index = $input.data('index'),
			name = $input.data('name');

		$input.attr({
			'name': name+"[" + (index+1) + "]" ,
			'data-index': index+1
			});
		$new_item.find('.desc-index').text(index+1+1);
		$(this).closest('.changable-item').after($new_item).find('#new_desc').remove();
	})

})(jQuery)