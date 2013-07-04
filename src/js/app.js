!(function () {

	///
    // Start the app
    ///
    require(
        ['knockout',
         'summary'],
        function (ko, summaryVM) {

			var testData = "[{'name':'Item','value':'20'}, {'name':'Item','value':'20'}, {'name':'Item','value':'20'}, {'name':'Item','value':'20'}, {'name':'Item','value':'30.50'}]",
				summaryModule = new summaryVM(testData);

            ko.applyBindings(summaryModule, document.getElementById('test-section'));
        });
})();