import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TickerTapeComponent from "../tradingViewWidget/TickerTapeComponent";
import "./landing.css";

const Landing = () => {
  const names = [
    "Victor", "Mallisa", "Alice", "Michael", "Lisa", "Lori", "Elsa", "John", "Grace", "Sophia",
    "James", "Oliver", "Emma", "Ethan", "Ava", "William", "Isabella", "Lucas", "Mia", "Mason",
    "Emily", "Benjamin", "Amelia", "Henry", "Abigail", "Alexander", "Charlotte", "Daniel", "Harper", "Jackson",
    "Liam", "Elijah", "Logan", "Noah", "Aiden", "Jacob", "Carter", "Zoe", "Madison", "Scarlett",
    "Jayden", "Evelyn", "Ellie", "Hannah", "Lucy", "Dylan", "Caleb", "Leah", "Landon", "Owen",
    "Gabriel", "Layla", "Ryan", "David", "Chloe", "Natalie", "Aaron", "Isaac", "Avery", "Ella",
    "Sebastian", "Jack", "Samuel", "Daniela", "Hudson", "Hunter", "Nora", "Penelope", "Savannah", "Brody",
    "Mateo", "Anthony", "Nolan", "Riley", "Wyatt", "Ezra", "Eliana", "Cora", "Aiden", "Skylar",
    "Adam", "Stella", "Julian", "Sadie", "Adrian", "Eleanor", "Elias", "Maya", "Jose", "Naomi",
    "Jeremiah", "Ruby", "Camila", "Nova", "Xavier", "Lila", "Asher", "Violet", "Charles", "Sophia",
  ];
  
  const amount = [
    "3500", "5000", "4500", "6500", "6000", "8000", "7000", "2500", "9500", "3800",
    "12000", "11000", "8500", "3400", "5700", "4400", "7600", "6800", "9200", "7400",
    "10300", "12300", "3100", "4200", "5400", "6300", "9000", "5600", "7100", "8300",
    "5200", "9800", "6400", "4700", "9900", "4300", "7800", "6100", "8800", "5000",
    "6700", "7300", "4900", "3900", "6200", "4100", "3700", "6900", "5900", "5300",
    "4600", "9300", "8300", "4900", "8500", "7000", "6200", "7700", "4800", "5700",
    "3400", "6500", "8500", "7800", "4400", "9600", "6200", "7300", "6700", "6900",
    "5400", "4600", "7600", "5000", "8100", "8800", "5800", "5300", "6400", "8600",
    "9300", "11000", "10400", "9200", "6200", "9000", "12000", "7300", "6500", "9100",
    "13000", "7600", "8300", "4700", "6200", "10400", "6700", "7500", "7700", "6900",
  ];
  
  const city = [
    "Texas", "New York", "New Castle", "London", "Alhambra", "Roseville", "Austin", "Chicago", "Paris", "Berlin",
    "Sydney", "Melbourne", "Toronto", "Vancouver", "Dublin", "Rome", "Madrid", "Barcelona", "Tokyo", "Osaka",
    "Beijing", "Shanghai", "Cairo", "Cape Town", "Johannesburg", "Mexico City", "Dubai", "Abu Dhabi", "Mumbai", "Delhi",
    "Kuala Lumpur", "Bangkok", "Singapore", "Jakarta", "Seoul", "Los Angeles", "San Francisco", "Boston", "Houston", "Miami",
    "Phoenix", "Atlanta", "Nashville", "Salt Lake City", "Montreal", "Ottawa", "Brisbane", "Perth", "Manchester", "Birmingham",
    "Glasgow", "Edinburgh", "Zurich", "Geneva", "Stockholm", "Copenhagen", "Oslo", "Helsinki", "Lisbon", "Porto",
    "Valencia", "Seville", "Milan", "Venice", "Florence", "Naples", "Budapest", "Vienna", "Prague", "Warsaw",
    "Krakow", "Istanbul", "Athens", "Tel Aviv", "Jerusalem", "Hanoi", "Ho Chi Minh City", "Manila", "Bangkok", "Phuket",
    "Auckland", "Wellington", "Santiago", "Buenos Aires", "Rio de Janeiro", "Sao Paulo", "Lima", "Bogota", "Quito", "Caracas",
    "Lagos", "Accra", "Nairobi", "Cairo", "Algiers", "Casablanca", "Marrakesh", "Rabat", "Luanda", "Maputo",
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
