(function($){

	"use strict";

	$('form').on('click', '.new_desc', function(e){
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

	$('form').on('change', '.quote_type', function(e){
		var for_target = $(this).find(':selected').data('for');
		if( for_target && $('[data-for="'+for_target+'"]') ) {
			$(this).closest('.item').find('.quote_input').not('[data-for="'+for_target+'"]').addClass('hide');
			$(this).closest('.item').find('.quote_input[data-for="'+for_target+'"]').removeClass('hide');
		}
		else {
			$(this).closest('.item').find('.quote_input').not('[data-for]').removeClass('hide');
			$(this).closest('.item').find('.quote_input[data-for]').addClass('hide');
		}
	})

})(jQuery)