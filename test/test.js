const eodAPI = require('../dist/index').default;

eodAPI.setup({apiToken: "OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX"});

(async () => {
    const res = await eodAPI.eod("AAPL.US", {fmt: 'json', from: "2020-01-01"});
    console.log(res);
})();