import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'; // Import Styled Components

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

function SearchForm({ onWeatherData }) {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (city.trim() !== '') {
      try {
        const API_KEY = '3a1f88ae7e197de9775fe6eaf73520d8';
        const apiUrl = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${location}`;

        const response = await axios.get(apiUrl);
        onWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <SubmitButton type="submit">Get Weather</SubmitButton>
    </Form>
  );
}

export default SearchForm;
