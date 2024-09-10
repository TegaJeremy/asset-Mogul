import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TickerTapeComponent from "../tradingViewWidget/TickerTapeComponent";
import "./landing.css";

const Landing = () => {
  const names = [
    "victor",
    "Mallisa",
    "Alice",
    "Michael",
    "Lisa",
    "lori",
    "Elsa",
  ];
  const amount = ["3500", "5000", "4500", "6500", "6000", "8000"];
  const city = [
    "texas",
    "new york",
    "new castle",
    "london",
    "alhambra",
    "Roseville",
  ];
  const [currentAmount, setCurrentAmount] = useState(names[0]);
  const [currentName, setCurrentName] = useState(names[0]);
  const [currentCity, setCurrentCity] = useState(city[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(true);
      setCurrentName(names[Math.floor(Math.random() * names.length)]);
      setCurrentAmount(amount[Math.floor(Math.random() * amount.length)]);
      setCurrentCity(city[Math.floor(Math.random() * city.length)]);
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [names]);

  return (
    <>
      <div className="landing-tickertape">
        <TickerTapeComponent />
      </div>
      <div className="landing_body">
        <Header />
        <Outlet />
        <Footer />
        <div
          className={`alert_users_achievement_container ${
            isVisible ? "visible" : ""
          }`}
        >
          <p>
            <span>{currentName}</span> from {currentCity} just earned $
            {currentAmount}!🎉
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
