import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"; // Styling

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/get-weather", {
        city: city,
      });

      const weatherData = response.data.weather;

      setWeather(weatherData);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather Info</h2>
      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleGetWeather} disabled={loading}>
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>{weather.location}</h3>
          <p>🌡 Temperature: {weather.temperature.current}°C (Feels like: {weather.temperature.feels_like}°C)</p>
          <p>💧 Humidity: {weather.humidity}%</p>
          <p>🌥 Conditions: {weather.conditions}</p>
          <p>🌬 Wind: {weather.wind.speed} m/s, Direction: {weather.wind.direction}</p>
          <p>🕰 Last Updated: {new Date(weather.last_updated * 1000).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
