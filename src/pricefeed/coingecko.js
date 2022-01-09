import _ from "https://deno.land/std@0.120.0/node/module.ts";

const httpGet = async (url) => {
    const data = await fetch(url).then(data => data.json());
    return data;
}

const getPrice = async (url, count) => {
    try {
        if (count > 10) return null;
        const result = await httpGet(url);
        const resultObj = result;
        return resultObj;
    } catch (error) {
        setTimeout(getPrice, 5000, url, count + 1);
    }
};

const main = async (symbols) => {
    const responses = [];
    const listSymbols = JSON.parse(symbols);

    const urls = listSymbols.map(
        (symbol) =>
            `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`,
    );

    const mappingSymbols = [
        "BTC",
        "ETH",
        "BNB",
        "XRP",
        "DOGE",
        "USDT",
        "LINK",
        "UNI",
        "USDC",
        "BUSD",
        "ORAI",
        "DAI",
        "SOL",
        "MATIC",
        "SUSHI",
        "DOT",
        "LUNA",
        "ICP",
        "XLM",
        "ATOM",
        "AAVE",
        "THETA",
        "EOS",
        "CAKE",
        "AXS",
        "ALGO",
        "MKR",
        "KSM",
        "XTZ",
        "FIL",
        "AMP ",
        "RUNE",
        "COMP",
        "OHM",
        "TIME",
        "MIM",
        "SPELL",
        "ICE",
        "GALA",
        "MANA",
        "ENJ",
        "SAND",
    ];

    for (let i = 0; i < urls.length; i++) {
        const resultObj = await getPrice(urls[i]);
        if (resultObj) {
            if (listSymbols[i] in resultObj) {
                let priceUsd = parseFloat(resultObj[listSymbols[i]].usd).toFixed(8);
                responses.push({
                    name: mappingSymbols[i],
                    prices: [priceUsd.toString()],
                });
            }
        }
    }
    console.log(JSON.stringify(responses))
};

main(...process.argv.slice(2));