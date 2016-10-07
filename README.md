First Steps

npm init

bower init

mkdir app

touch .bowerrc

install bower components inside app folder: "directory": "app/bower_components"

create gitignore for node modules and app/bower_components

Setup Protractor

Install http-server so there is a URL that protractor can access it

Add npm script alias for start that will run http-server: cd app && ../node_modules/http-server/bin/http-server

Install protractor

Add npm script alias for webdriver-manager: ./node_modules/protractor/bin/webdriver-manager

npm run webdriver-manager update

npm run webdriver-manager start (this must always be running for protractor to work)

Create a test directory

Create a protractor.conf.js file

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*.js'],
  baseUrl: 'http://localhost:8080'
}

create e2e directory in test (test files go in here)

Add npm script alias for protractor: ./node_modules/protractor/bin/protractor

To run protractor tests: npm run protractor test/protractor.conf.js
