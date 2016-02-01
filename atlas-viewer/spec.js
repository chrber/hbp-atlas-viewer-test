// protractor-perf not working: TypeError: Cannot read property 'params' of undefined
// var ProtractorPerf = require('protractor-perf');

describe('Atlas Viewer', function() {

	//var perf = new ProtractorPerf(protractor); // Initialize the perf runner

	it('should have a title', function() {
		// the baseUrl need to be given calling this test
		// protractor conf.js --baseUrl="http://155.210.198.214/" --capabilities.count=2
		browser.get("/");
		
		expect(browser.getTitle()).toEqual('Atlas Viewer');	
	});
	
	it('should switch to Human brain image', function() {
			
		browser.get("/");
		
		// for debugging this can be used
		//browser.pause();
		
		var allOptions = element.all(by.options('stack.type group by stack.species for stack in stacks'));
		expect(allOptions.count()).toEqual(2);
		var firstOption = allOptions.first();
		expect(firstOption.getText()).toEqual('Waxholm Rat, UiO');
		var secondOption = allOptions.get(1);
		expect(secondOption.getText()).toEqual('BigBrain, FZJ');
		secondOption.click();
			
		browser.sleep(2000);
		 
		expect(element(by.id('sampleSelector')).$('option:checked').getText()).toEqual('BigBrain, FZJ');
	});
	
	it('should zoom out', function() {
		//perf.start(); // Start measuring the metrics
		var zoomOutButton = element(by.css('.olControlZoomOut.olButton'));
		expect(zoomOutButton.getText()).toEqual('−');
		var numberOfZooms = browser.params.numberOfZooms
		for (var i = 0; i < numberOfZooms; ++i) {
			zoomOutButton.click();
			browser.sleep(1000);
		}
	});
	
	it('should zoom out', function() {
		var zoomInButton = element(by.css('.olControlZoomIn.olButton'));
		expect(zoomInButton.getText()).toEqual('+');
		var numberOfZooms = browser.params.numberOfZooms
		for (var i = 0; i < numberOfZooms; ++i) {
			zoomInButton.click();
			browser.sleep(1000);
		}
		// console.log(perf.getStats())
		//perf.stop(); // Stop measuring the metrics
	});
});