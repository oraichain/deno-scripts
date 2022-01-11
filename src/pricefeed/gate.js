import _ from "https://deno.land/std@0.120.0/node/module.ts";

const httpGet = async (url) => {
    const data = await fetch(url).then(data => data.json());
    return data;
}
const main = async (symbols) => {
    const responses = [];
    const listSymbols = JSON.parse(symbols);
    const urls = listSymbols.map(symbol => `https://api.gateio.ws/api/v4/spot/tickers?currency_pair=${symbol}_USDT`);
    for (let i = 0; i < urls.length; i++) {
        const result = await httpGet(urls[i]);
        if (result[0] && 'last' in result[0]) {
            responses.push({
                name: listSymbols[i],
                prices: [result[0].last]
            });
        }
    }
    console.log(JSON.stringify(responses))
};

main(...process.argv.slice(2))