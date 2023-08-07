import React from 'react';
import styled from 'styled-components'; // Import Styled Components

const DisplayWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  max-width: 300px;
  margin: 0 auto;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Header = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin: 5px 0;
`;

function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return <DisplayWrapper>Loading...</DisplayWrapper>;;
  }

  const { name, main, weather } = weatherData;

  return (
    <DisplayWrapper>
      <Header>Weather in {name}</Header>
      <Paragraph>Current Conditions: {weather[0].description}</Paragraph>
      <Paragraph>Temperature: {main.temp}°C</Paragraph>
      <Paragraph>Humidity: {main.humidity}%</Paragraph>
    </DisplayWrapper>
  );
}

export default WeatherDisplay;
