describe('Atlas Viewer', function() {
		
	it('should have a title', function() {
		browser.get('http://155.210.198.214/');
		
		expect(browser.getTitle()).toEqual('Atlas Viewer');	
	});
	
	it('should switch to Human brain image', function() {
			
		browser.get('http://155.210.198.214/');
		
		// for debugging this can be used
		//browser.pause();
		
		var allOptions = element.all(by.options('stack.type group by stack.species for stack in stacks'));
		expect(allOptions.count()).toEqual(2);
		var firstOption = allOptions.first();
		expect(firstOption.getText()).toEqual('Waxholm Rat, UiO');
		var secondOption = allOptions.get(1);
		expect(secondOption.getText()).toEqual('BigBrain, FZJ');
		secondOption.click();
			
		browser.sleep(5000)
		 
		expect(element(by.id('sampleSelector')).$('option:checked').getText()).toEqual('BigBrain, FZJ') 
	});
	
	
});