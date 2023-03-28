import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useWeather() {
  const [weatherData, setWeatherData] = useState([]);
  
  const getWeatherData = async () => {
    
    try {
      const response = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly', {
        method: 'GET',
        params: {lat:  '-8.4466992', lon: '114.1672582'},
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


  // useEffect(() => {
  //   getWeatherData();
  // }, []);

  return {
    weatherData,
    getWeatherData,
   
  };
}
