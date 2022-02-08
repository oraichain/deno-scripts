import _ from "https://deno.land/std@0.120.0/node/module.ts";

const httpGet = async (url) => {
    const data = await fetch(url).then(data => data.json());
    return data;
}

const getPrice = async (url, count) => {

    try {
        if (count > 10) return null;
        const result = await httpGet(`https://api.coinmarketcap.com/${url}`);
        return result;
    } catch (error) {
        setTimeout(getPrice, 5000, url, count + 1);
    }
};

const main = async (symbols) => {
    const responses = [];
    const listSymbols = JSON.parse(JSON.parse(symbols)[0]);

    const urls = listSymbols.map(
        (symbol) =>
            `/data-api/v3/cryptocurrency/market-pairs/latest?slug=${symbol}&start=1&limit=6&category=spot&sort=cmc_rank_advanced`,
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
        "AMP",
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
        if (resultObj && resultObj.data) {
            if (
                mappingSymbols[i] === resultObj.data.symbol &&
                resultObj.data.marketPairs[0]
            ) {
                let priceUsd = resultObj.data.marketPairs[0].price.toFixed(8);
                responses.push({
                    name: mappingSymbols[i],
                    prices: [priceUsd.toString()],
                });
            }
        }
    }

    console.log(JSON.stringify(responses));
};

main(...process.argv.slice(2));