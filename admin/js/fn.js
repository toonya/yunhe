(function($){

	"use strict";
	// 新描述 business0management 1.1
	$('form.business-management-11').on('click', '.new_desc', function(e){
		e.preventDefault();
		var $new_item = $(this).closest('.changeable-item').clone(),
			$input = $new_item.find('input'),
			index = $input.data('index'),
			name = $input.data('name');

		$input.attr({
			'name': name+"[" + (index+1) + "]" ,
			'data-index': index+1
			});
		$new_item.find('.desc-index').text(index+1+1);
		$new_item.find('input').removeAttr('required');

		$(this).closest('.changeable-item').after($new_item).find('.new_desc').remove();
	})
	// 切换报价类型
	.on('change', '.quote_type', function(){
		var for_target = $(this).find(':selected').data('for');
		if( for_target && $('[data-for="'+for_target+'"]') ) {
			$(this).closest('.item').find('.quote_input').not('[data-for="'+for_target+'"]').addClass('hide').find('input').removeAttr('data-required');
			$(this).closest('.item').find('.quote_input[data-for="'+for_target+'"]').removeClass('hide').find('input').attr('data-required','');
		}
		else {
			$(this).closest('.item').find('.quote_input').not('[data-for]').removeClass('hide').find('input').attr('data-required','');
			$(this).closest('.item').find('.quote_input[data-for]').addClass('hide').find('input').removeAttr('data-required');
		}
	})
	// 新报价
	.on('click', '.item .new_quote', function(e){
		e.preventDefault();

		var $new_item = $(this).closest('.item').clone(),
			$input = $new_item.find('input');
		$input.each(function(i,e){
			var $input = $(this),
			index = $input.data('index'),
			name = $input.data('name');
			$input.attr({
				'name': name+"[" + (index+1) + "]" ,
				'data-index': index+1
				});
		});

		$new_item.find('.quote-index').text( $new_item.find('.quote-index').text()/1+1 );
		$new_item.find('option').first().prop('selected', 'selected').trigger('change');
		$new_item.find('input').removeAttr('required');
		$new_item.find('select').removeAttr('required');

		$(this).closest('.item').after($new_item).find('.new_quote').remove();
	});

	// select all system-manage 3.2
	$('[data-select-all]').on('change', function(){
		var group_name = $(this).data('selectAll');
		$('[data-select-group="'+group_name+'"]').prop('checked', this.checked);
	});

	// form validate
	$('[data-required]').closest('form').on('submit', function(e){
		//$('this').trigger('specialValidation');

		$(this).find('[data-required]').each(function(i,e){
			$(this).attr('required','required');
		})

		if( $(this).find(':invalid').size() > 0 )
			e.preventDefault();
	});
	// special validation
	//$('form.business-management-11').on('submit', function(e){});

})(jQuery);