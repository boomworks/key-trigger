(function($){

	$.keyTrigger = function(str, callback, ctx){
		var char_codes = [], progress = i = 0, string_length = str.length, ctx = ctx || document;

		for(i; i < string_length; i++){
			char_codes.push(str.charCodeAt(i));
		}

		$(ctx)
			.bind('keypress', function(e){
				var c = e.charCode;

				if(c === char_codes[progress]){
					progress++;
				}else{
					progress = c === char_codes[0] ? 1 : 0;
				}

				if(progress == char_codes.length){
					callback(str);
				}
			})
		;	
	};

})(jQuery);

