exports.config = {
  capabilities: {
    browserName: 'chrome',
	count: 1,
    // To enable sharing the test between the amount of instances specified by count above
	// activate the two options below.
	//shardTestFiles: true,
    //maxInstances: 2
  },
  params: {
	  numberOfZooms: 3
  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumPort: 4444,
  specs: ['spec.js']
}