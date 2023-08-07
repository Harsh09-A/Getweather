import React, { useState } from 'react';
import axios from 'axios';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {weatherData && (
        <div>
          <h2>Weather Conditions</h2>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Conditions: {weatherData.conditions}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
