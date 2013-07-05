define(
    ['summary'],
	function(summary) {
	
		describe("Summary view model", function() {
		
			var vm;
		
			beforeEach(function() {
				vm = new summary(items);
			});
			
			var items = [{'name':'Item','value':'20'}, {'name':'Item','value':'30.50'}];
			
			it("should be initialisable with list of initial items", function() {
				var list = vm.list();
				
				expect(list.length).toBe(2);
				expect(list[0].name).toBe(items[0].name);
				expect(parseFloat(list[0].value())).toBe(parseFloat(items[0].value));
				expect(list[1].name).toBe(items[1].name);
				expect(parseFloat(list[1].value())).toBe(parseFloat(items[1].value));
			});
			
			it("should allow adding items", function() {
				vm.addItem();
				expect(vm.list().length).toBe(3);
			});
			
			it("should calculate the right total", function() {
				expect(parseFloat(vm.sum())).toBe(50.5);
			});
			
			it("should calculate the right total after modifying item", function() {
				vm.list()[0].value(19);
				expect(parseFloat(vm.sum())).toBe(49.5);
			});
			
			it("should ignore non numeric values while calculating total", function() {
				vm.list()[0].value('a');
				expect(parseFloat(vm.sum())).toBe(30.5);
			});
		});
	}
);

