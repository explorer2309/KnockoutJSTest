define(
    ['knockout', 'util'],
    function (ko, util) {

		var Item = function(item) {
			var self = this;
			
			var val = isNaN(parseFloat(item.value)) ? 0 : parseFloat(item.value);
			
			self.name = item.name || 'Item';
			self.value = ko.observable(val);
		};

		var summaryViewModel = function(input) {
			var self = this;
			var items = [];
			
			if (!(input instanceof Array))
				input = [];
	
			input.forEach(function(item) {
				items.push(new Item(item));
			});
	
			self.list = ko.observableArray(items);
			
			self.sum = ko.computed(function() {
				var total = 0;
				self.list().forEach(function(item) {
					var val = parseFloat(item.value());
					if (!isNaN(val))
						total += parseFloat(val);
				});
				return util.formatCurrency(total);
			}, self);
			
			self.addItem = function(input) {
				var item = new Item({});
				self.list.push(item);
			};
        };

        return summaryViewModel;
});