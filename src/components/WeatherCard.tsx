import {
  getCurrentTime,
  getCurrentDay,
  getDevicesAmmount,
} from "../utils/helpers";
import { useState, useEffect } from "react";

export default function WeatherCard() {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="card weather-card">
      <span className="weather-card_time">{currentTime}</span>
      <span className="weather-card_day">{getCurrentDay()}</span>
      <div className="weather-card_weather">
        <img src="/src/assets/img/weather-icon.png" alt="" />
        <ul className="weather-card_list">
          <li>11°C</li>
          <li>Cloudy</li>
        </ul>
      </div>
    </div>
  );
}
