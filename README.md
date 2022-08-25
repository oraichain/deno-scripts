<p align="center">
  <a href="http://orai.io/" target="blank"><img src="https://orai.io/images/logos/logomark-light.png" width="200" alt="Oraichain Logo" /></a>
</p>

  <p align="center">Oraichain Deno Script</p>

## Document

Notes: Script run from another process, so input in pricefeed as kucoin, gate, ... is a stringify. Follow `Run Locally` to execute the command.

## Run Locally

1. `flow-classification`

2. `pricefeed`

   ```bash
   deno run --allow-net ./src/pricefeed/kucoin.js '["[\"USDT\", \"UTK\"]"]'
   ```
