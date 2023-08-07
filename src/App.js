import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';
import './styles.css'; 
import styled from 'styled-components'; // Import Styled Components

const AppWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
`;

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <AppWrapper>
      <Title>Weather App</Title>
      <SearchForm onWeatherData={handleWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </AppWrapper>
  );
}

export default App;

