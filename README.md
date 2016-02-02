# hbp-atlas-viewer-test

These tests are created to minimally test the Atlas Viewer application of the Human Brain project which have 
OneData (here: http://155.210.198.204/) or dCache  (here: http://155.210.198.214/) as a backend storage.

The tests make use of https://angular.github.io/protractor. Please install it first as stated on the webpage (https://angular.github.io/protractor/#/tutorial). Then start the webdriver manager:
```
$ webdriver-manager update
$ webdriver-manager start
```

If installed you should have a command called protractor on your command line. Now, clone the repository:

```
$ git clone https://github.com/chrber/hbp-atlas-viewer-test.git
```
cd into the atlas-viewer directory:
```
$ cd atlas-viewer
```

You can then proceed to execute the tests on the two different endpoints:

```
$ protractor conf.js --baseUrl="http://155.210.198.204/" --capabilities.count=2 --params.numberOfZooms=2
```

```
$ protractor conf.js --baseUrl="http://155.210.198.214/" --capabilities.count=2 --params.numberOfZooms=2
```
There are paramters that have to be set:

    --baseUrl=<Base URL>  ...  Endpoint to be tested

The other parameters are optional:

    --capabilities.count=<Integer Number>  ...  Number of browsers to be instanticated (default: 1)
    --params.numberOfZooms=<Integer Number>  ... Number of zooms to be performed (default: 3). There will always be n number of zooms out followed by the same amount of zooms in 
