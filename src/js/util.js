define(
    [],
    function () {

		var self = this;
		
		self.formatCurrency = function(value) {
			return value.toFixed(2);			
		};
	
		return self;
	}
);