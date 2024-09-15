import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import WeatherC from "./WeatherC";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <WeatherC weather={weather} />
    </div>
  );
};

export default App;
