!(function () {

	///
    // Start the app
    ///
	
	require.config({
		baseUrl: 'js',
		paths: { jquery: 'jquery-1.10.2' }
	});
	
    require(
		['knockout',
		 'jquery',
		 'summary'],
		function (ko, $, summaryVM) {

			var testData = [{'name':'Item','value':'20'}, {'name':'Item','value':'20'}, {'name':'Item','value':'20'}, {'name':'Item','value':'20'}, {'name':'Item','value':'30.50'}],
				summaryModule = new summaryVM(testData);

			ko.bindingHandlers.animateUpdate = {
				update: function(element, valueAccessor) {
					var $elem = $(element),
						value = valueAccessor();
					$elem.hide();
					$elem.text(ko.utils.unwrapObservable(value));
					$elem.fadeIn(500);
					// note: if we prefer CSS3 transitions, then perhaps we can add and remove CSS3 class to achive the animation
				}
			};
				
			ko.applyBindings(summaryModule, document.getElementById('test-section'));
		});
})();