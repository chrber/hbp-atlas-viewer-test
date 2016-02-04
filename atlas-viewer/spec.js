#!/usr/bin/env node

// Protractor api: https://angular.github.io/protractor/#/api
// Protractor-perf metrics description: https://github.com/axemclion/browser-perf/wiki/Metrics
var ProtractorPerf = require('protractor-perf');

describe('Atlas Viewer', function() {

	var perfRunner = new ProtractorPerf(protractor, browser);
	var numberOfTilesBeforeZoom;
	var numberOfTilesAfterZoom;

	it('should have a title', function() {
		// the baseUrl need to be given calling this test
		// protractor conf.js --baseUrl="http://155.210.198.214/" --capabilities.count=2
		browser.get("/");
		
		expect(browser.getTitle()).toEqual('Atlas Viewer');	
	});

	it('should switch to Human brain image', function() {
		
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


		var zoomOutButton = element(by.css('.olControlZoomOut.olButton'));
		expect(zoomOutButton.getText()).toEqual('−');

		var numberOfZooms = browser.params.numberOfZooms

		element.all(by.className('olTileImage')).count().then(function(count) {
			numberOfTilesBeforeZoom=count;
		});

		perfRunner.start(); // Start measuring the metrics

		for (var i = 0; i < numberOfZooms; ++i) {
			zoomOutButton.click();
			browser.sleep(1000);
		}

		perfRunner.stop().then(function(data) {
			console.log("Performance data of zoom out:\n")
			console.log(data);
		}); // Stop measuring the metrics

		element.all(by.className('olTileImage')).count().then(function(count) {
			numberOfTilesAfterZoom=count;
			expect(numberOfTilesBeforeZoom).toBeGreaterThan(numberOfTilesAfterZoom);
		});


	});
	
	it('should zoom in', function() {

		var zoomInButton = element(by.css('.olControlZoomIn.olButton'));
		expect(zoomInButton.getText()).toEqual('+');
		var numberOfZooms = browser.params.numberOfZooms

		element.all(by.className('olTileImage')).count().then(function(count) {
			numberOfTilesBeforeZoom=count;
		});

		perfRunner.start();
		for (var i = 0; i < numberOfZooms; ++i) {
			zoomInButton.click();
			browser.sleep(1000);
		}
		perfRunner.stop().then(function(data) {
			console.log("Performance data of zoom in:\n")
			console.log(data);
		}); // Stop measuring the metrics

		element.all(by.className('olTileImage')).count().then(function(count) {
			numberOfTilesAfterZoom=count;
			expect(numberOfTilesBeforeZoom).toBeLessThan(numberOfTilesAfterZoom);
		});
		// This part is not working
		//console.log(perfRunner.getStats())
	});
});