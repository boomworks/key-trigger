(function($){

	$.keyTrigger = function(str, callback, ctx){
		var char_codes = [], p = i = 0, string_length = str.length, ctx = ctx || document;
		
		for(i; i < string_length; i++){
			char_codes.push(str.charCodeAt(i));
		}

		$(ctx)
			.bind('keypress', function(e){
				p = e.charCode === char_codes[p] ? p + 1 : e.charCode === char_codes[0] ? 1 : 0;
				if(p === char_codes.length){
					callback.call(ctx, str);
				}
			})
		;
	};

	$.fn.keyTrigger = function(str, callback, opts){
		var options = $.extend({}, $.fn.keyTrigger.defaults, opts);
		return this.each(function(){
			$.keyTrigger(str, callback, this);
		});
	};

	$.fn.keyTrigger.defaults = {};

})(jQuery);

