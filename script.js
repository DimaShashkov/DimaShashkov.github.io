jQuery('document').ready(function(){
	
	jQuery('#plus').on('click', function(){
		var val1, val2, val3;
		val1 = jQuery('#value1').val();
		val2 = jQuery('#value2').val();
		
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		val3 = val1 + val2;
		jQuery('#resualt').val(val3)
	});
	
	jQuery('#minus').on('click', function(){
		var val1, val2, val3;
		val1 = jQuery('#value1').val();
		val2 = jQuery('#value2').val();
		
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		val3 = val1 - val2;
		jQuery('#resualt').val(val3)
	});
	jQuery('#multiply').on('click', function(){
		var val1, val2, val3;
		val1 = jQuery('#value1').val();
		val2 = jQuery('#value2').val();
		
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		val3 = val1 * val2;
		jQuery('#resualt').val(val3)
	});
	jQuery('#share').on('click', function(){
		var val1, val2, val3;
		val1 = jQuery('#value1').val();
		val2 = jQuery('#value2').val();
		
		val1 = parseInt(val1);
		val2 = parseInt(val2);
		val3 = val1 / val2;
		jQuery('#resualt').val(val3)
	});	
});