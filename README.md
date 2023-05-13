<p align="center">
  <a href="http://orai.io/" target="blank"><img src="https://orai.io/images/logos/logomark-light.png" width="200" alt="Oraichain Logo" /></a>
</p>

  <p align="center">Oraichain Deno Script</p>

## Document

Notes: Script run from another process, so input in pricefeed as kucoin, gate, ... is a stringify. Follow `Run Locally` to execute the command.

## Run Locally

1. `pricefeed`

```bash
deno run --allow-net --unstable ./src/pricefeed/coinbase.js WyJCVEMiLCAiRVRIIiwgIkJOQiIsICJYUlAiLCAiRE9HRSIsICJVU0RUIiwgIkxJTksiLCAiVU5JIiwgIlVTREMiLCAiQlVTRCIsICJPUkFJIiwgIkRBSSIsICJTT0wiLCAiTUFUSUMiLCAiU1VTSEkiLCAiRE9UIiwgIkxVTkEiLCAiSUNQIiwgIlhMTSIsICJBVE9NIiwgIkFBVkUiLCAiVEhFVEEiLCAiRU9TIiwgIkNBS0UiLCAiQVhTIiwgIkFMR08iLCAiTUtSIiwgIktTTSIsICJYVFoiLCAiRklMIiwgIkFNUCIsICJSVU5FIiwgIkNPTVAiXQ==

# where the input is an array of paremters in base64. The base64 above is decoded to: ["BTC", "ETH", "BNB", "XRP", "DOGE", "USDT", "LINK", "UNI", "USDC", "BUSD", "ORAI", "DAI", "SOL", "MATIC", "SUSHI", "DOT", "LUNA", "ICP", "XLM", "ATOM", "AAVE", "THETA", "EOS", "CAKE", "AXS", "ALGO", "MKR", "KSM", "XTZ", "FIL", "AMP", "RUNE", "COMP"]

# the result returned from the script should be a single console.log form printing a string.
```
