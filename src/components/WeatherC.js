import React from "react";

const WeatherC = () => {
  const { temperature, conditions } = weather;

  const tempStyle = { color: temperature > 20 ? "red" : "blue" };

  return (
    <div>
      <p style={tempStyle}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
      <span style={tempStyle}>Temperature Color Indicator</span>
    </div>
  );
};
export default WeatherC;
