import React, { useState, useEffect } from "react";
import axios from "axios";
const CoinGecko = require("coingecko-api");

const Main = () => {
  const [geckoBTC, setGeckoBTC] = useState({});
  const [geckoETH, setGeckoETH] = useState({});
  const [blockchain, setBlockchain] = useState([]);

  useEffect(() => {
    const CoinGeckoClient = new CoinGecko();
    var getBtcData = async () => {
      let data = await CoinGeckoClient.coins.fetch("bitcoin", {});
      setGeckoBTC(data);
    };
    getBtcData()
    var getEthData = async () => {
      let data = await CoinGeckoClient.coins.fetch("ethereum", {});
      setGeckoETH(data);
    };
    getEthData()
  }, [])

  let btcPrice = 0;
  if (geckoBTC.data !== undefined) {
    btcPrice = geckoBTC.data.market_data.current_price.usd;
    console.log("btcPrice", btcPrice);
  }

  let ethPrice = 0;
  if (geckoETH.data !== undefined) {
    ethPrice = geckoETH.data.market_data.current_price.usd;
    console.log("ethPrice", ethPrice);
  }

  return (
    <div id="main" className="container">
      <div>
        <p>CoinGecko</p>
        <p>BTC</p>
        <p>1 BTC in USD: {btcPrice}</p>
        <p>ETH</p>
        <p>1 ETH in USD: {ethPrice}</p>
      </div>
      <div>
        <p>Blockchain</p>
        <p>BTC</p>
        <p>1 BTC in USD: {btcPrice}</p>
        <p>ETH</p>
        <p>1 ETH in USD: {ethPrice}</p>
      </div>
    </div>
  );
};

export default Main;
