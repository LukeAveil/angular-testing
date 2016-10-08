# TDD Angular

## First Steps

```bash
npm init
bower init
```

Create an app directory

Create a .bowerrc file in the root and set bower to install components in the app folder

```js
{
  "directory": "app/bower_components"
}
```
Create .gitignore for node_modules and app/bower_components

```bash
bower install angular --save
```

## Setup Protractor

Install http-server so there is a URL that protractor can access it

Add npm script alias for start that will run http-server

```js
{
  "scripts": {
    "start": "cd app && ../node_modules/http-server/bin/http-server"
  },
}
```

Install protractor

Add npm script alias for webdriver-manager

```js
"webdriver-manager": "./node_modules/protractor/bin/webdriver-manager"
```

Add npm script alias for protractor

```js
"protractor" : "./node_modules/protractor/bin/protractor"
```
```bash
npm run webdriver-manager update
```

Create a protractor.conf.js file in test directory

```js
  exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/*.js'], //lists the patterns that match the names of test files
    baseUrl: 'http://localhost:8080'
  }
```

create e2e directory in test (feature test files go in here)

```js
  npm run webdriver-manager start //this must always be running for protractor to work along with http-server
```

To run protractor tests

```js
  npm run protractor test/protractor.conf.js
```

## Selecting Elements

Common...

```js
  $('#some-id') // For finding one element
  $$(by.css('.some-class')) // For finding multiple elements
```
Others...

```js
$('#some-id')                // element(by.id('#some-id'))
$('.some-class')             // element(by.className('.some-class'))
$('tag-name')               // element(by.tagName('tag-name'))
$('[ng-message=required]')   // remember to leave out the double quotes around the value of attribute
$('#parent #child')          // select one child inside parent
$('input').sendKeys('hello') // input a value in form
$('button').click()          // click a button
$$('ul li')                   // select all children inside parent - note the two $$ symbols, equivalent of `element.all`
$$('ul li').first()           // select first of children
$$('ul li').last()            // select last of children
$$('ul li').get(index)        // select index-th of children
$$('ul li').count()           // count the number of elements
```

Commands...

```js
browser.get('yoururl'); // Load address, can also use '#yourpage'
browser.navigate().back();
browser.navigate().forward();
browser.sleep(10000); // if your test is outrunning the browser
browser.waitForAngular(); // if your test is outrunning the browser
browser.getLocationAbsUrl() // get the current address
browser.ignoreSynchronization = true; // If true, Protractor will not attempt to synchronize with the page before performing actions
```
