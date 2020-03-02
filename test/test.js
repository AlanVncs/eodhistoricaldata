const {eodData} = require('../dist/index');

eodData.setup({apiToken: "OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX"});

(async () => {
    const res = await eodData.eod("AAPL.US", {fmt: 'json', from: "2020-02-01"});
    console.log(res);
})();