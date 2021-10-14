import React, { useState, useEffect } from "react";
import axios from "axios";
const CoinGecko = require("coingecko-api");

const Main = () => {
  const [gecko, setGecko] = useState({});
  const [blockchain, setBlockchain] = useState([]);

  useEffect(() => {
    const CoinGeckoClient = new CoinGecko();
    var getData = async () => {
      let data = await CoinGeckoClient.coins.fetch("bitcoin", {});
      setGecko(data)
    };
    getData()
  }, [])

  let btcPrice = 0;
  if (gecko.data !== undefined) {
    btcPrice = gecko.data.market_data.current_price.usd;
    console.log("btcPrice", btcPrice);
  }

  return (
    <div id="main" className="container">
      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Main;
