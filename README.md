# eodhistoricaldata
An eodhistoricaldata API - https://eodhistoricaldata.com/


## Getting started
#### Install
```
$ npm install eodhistoricaldata
```
#### Example
```js
const eodAPI = require('eodhistoricaldata').default;
// import eodAPI from "eodhistoricaldata";

eodAPI.setup({apiToken: "OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX"});
(async () => {
	const eodRes = await eodAPI.eod("AAPL.US", {fmt: 'json', from: "2020-01-01"});
 	console.log(eodRes);
})();

// OR...

eodAPI.setup({apiToken: "OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX", exchangeCode: "US"});
(async () => {
	const eodRes = await eodAPI.eod("AAPL", {fmt: 'json', from: "2020-01-01"});
	console.log(eodRes);
})();
```
As you can see, you must set up this module with your api token ([Get yours here](https://eodhistoricaldata.com/cp/settings "Get yours here")) and (**optionally**) an exchange code ([List of Codes](https://eodhistoricaldata.com/knowledgebase/list-supported-exchanges/ "List of codes")). Once you completed the setup, you can use any function from [Oficial Documentation](https://eodhistoricaldata.com/knowledgebase/ "oficial documentation").

#### [Documentation here](https://github.com/AlanVncs/eodhistoricaldata/wiki/Documentation "The Documentation")
