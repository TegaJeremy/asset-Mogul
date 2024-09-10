import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import classes from "./TickerTapeComponent.module.css";

const tickersymbol = [
  {
    proName: "FOREXCOM:SPXUSD",
    title: "S&P 500",
  },
  {
    proName: "FOREXCOM:NSXUSD",
    title: "Nasdaq 100",
  },
  {
    proName: "FX_IDC:EURUSD",
    title: "EUR/USD",
  },
  {
    proName: "BITSTAMP:BTCUSD",
    title: "BTC/USD",
  },
  {
    proName: "BITSTAMP:ETHUSD",
    title: "ETH/USD",
  },
  {
    proName: "FX:GBPUSD",
    title: "GBP/USD",
  },
  {
    proName: "FX:USDCAD",
    title: "USD/CAD",
  },
  {
    proName: "FX:AUDUSD",
    title: "AUD/USD",
  },
  {
    proName: "FX:USDCHF",
    title: "USD/CHF",
  },

  {
    proName: "INDEX:DAX",
    title: "DAX Index",
  },

  {
    proName: "INDEX:HSI",
    title: "Hang Seng Index",
  },
];

function TickerTapeComponent() {
  return (
    <div className={classes.tickContainer}>
      <TickerTape
        symbols={tickersymbol}
        colorTheme="dark"
        displayMode="compact"
      ></TickerTape>
    </div>
  );
}

export default TickerTapeComponent;
