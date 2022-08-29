import _ from "https://deno.land/std@0.120.0/node/module.ts";

const httpGet = async (url) => {
    const data = await fetch(url).then(data => data.json());
    return data;
}

const main = async (symbols) => {
    const responses = [];
    const listSymbols = JSON.parse(JSON.parse(symbols)[0]);
    const urls = listSymbols.map(symbol => `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`);
    for (let i = 0; i < urls.length; i++) {
        const result = await httpGet(urls[i]);
        if ('price' in result) {
            responses.push({
                name: listSymbols[i],
                prices: [result.price]
            });
        }
    }
    console.log(JSON.stringify(responses))
};

main(...process.argv.slice(2))
