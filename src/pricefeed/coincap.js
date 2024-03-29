import _ from "https://deno.land/std@0.120.0/node/module.ts";
import { decodeScriptInput } from '../utils.js'

const httpGet = async (url) => {
    const data = await fetch(url).then(data => data.json());
    return data;
}

const getPrice = async (url, count) => {
    try {
        if (count > 10) return null;
        const result = await httpGet(url);
        return result;
    } catch (error) {
        setTimeout(getPrice, 5000, url, count + 1);
    }
}

const main = async (symbols) => {
    const responses = [];
    const listSymbols = decodeScriptInput(symbols);
    const mappingSymbols = ["BTC", "ETH", "BNB", "XRP", "DOGE", "USDT", "LINK", "UNI", "USDC", "BUSD", "ORAI", "DAI", "SOL", "MATIC", "SUSHI", "DOT", "LUNA", "ICP", "XLM", "ATOM", "AAVE", "THETA", "EOS", "CAKE", "AXS", "ALGO", "MKR", "KSM", "XTZ", "FIL", "AMP", "RUNE", "COMP"];
    const urls = listSymbols.map(symbol => `https://api.coincap.io/v2/assets/${symbol}`);
    for (let i = 0; i < urls.length; i++) {
        const resultObj = await getPrice(urls[i]);
        if (resultObj) {
            if ('data' in resultObj) {
                let priceUsd = parseFloat(resultObj.data.priceUsd).toFixed(8);
                responses.push({
                    name: mappingSymbols[i],
                    prices: [priceUsd.toString()]
                });
            }
        }
    }
    console.log(JSON.stringify(responses))
};

main(...process.argv.slice(2))