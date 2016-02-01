exports.config = {
  capabilities: {
    browserName: 'chrome',
	//count: 2
  },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
}