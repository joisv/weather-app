import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useWeather() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchWeather, setSearchWeather ] = useState([]);

  const getWeatherData = async () => {
    try {
      const response = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly', {
        method: 'GET',
        params: {lat: '-8.4326215', lon: '114.1669654'},
        headers: {
          'X-RapidAPI-Key': 'aea5e6f851msh0d3019689849da1p138e04jsn8b38e8f2988a',
          'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
      });
      setWeatherData(response.data);
    } catch (error) {
      setWeatherData(error);
    }
  };

  const searchWeatherData = async (query) => {
    try {
      const response = await axios.get('https://visual-crossing-weather.p.rapidapi.com/forecast', {
        method: 'GET',
        params: {
          aggregateHours: '24',
          location: query,
          contentType: 'csv',
          unitGroup: 'us',
          shortColumnNames: '0'
        },
        headers: {
          'X-RapidAPI-Key': 'aea5e6f851msh0d3019689849da1p138e04jsn8b38e8f2988a',
          'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
      })
      setSearchWeather(response.data)
    } catch (error) {
      setSearchWeather(error)
    }
  }

  useEffect(() => {
    getWeatherData();
    searchWeatherData();
  }, []);

  return {
    weatherData,
    getWeatherData,
    searchWeather,
    searchWeatherData
  };
}
