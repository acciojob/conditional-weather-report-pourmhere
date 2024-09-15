import React, { useEffect, useState } from "react";
import WeatherC from "./WeatherC";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherC weather={weather} />
    </div>
  );
};

export default App;
