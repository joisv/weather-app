import Head from 'next/head'
import Footer from './footer'
import { motion as m } from 'framer-motion'
import { useState, useEffect } from 'react'
import getlocations from '@/functions/getlocations'
import useWeather from '@/functions/fetch'

export default function Home(props) {

  const [dayName, setDayName] = useState('');
  const [dateName, setDateName] = useState('');
  const [second, setSeconds] = useState(0);
  const [hour, setHours] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [currentMonts, setCurrentMonth] = useState(0);
  const { location, permission, updateLocation } = getlocations()
  const [query, setQuery] = useState('');
  const { getWeatherData, weatherData } = useWeather()
 

  
  let today = new Date();
  const currentMonth = today.getMonth();
  let date = today.getDate()
  let day = today.getDay();
  let daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  let currentDayName = daysOfWeek[day];

  let hours = today.getHours();
  let minutes = today.getMinutes();
  const formattedMinute = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  let seconds = today.getSeconds();

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
   
  }

  function fahrenheitToCelsius(fahrenheit) {
    const getCelsius = (fahrenheit - 32) * 5/9;
    const celsius = Math.round(getCelsius)
    return celsius;
  }
  
  useEffect(() => {
      getWeatherData()
      updateLocation()
      setDayName(currentDayName)
      setDateName(date)
      setHours(hours)
      setMinutes(formattedMinute)
      setCurrentMonth(currentMonth)
    return () => clearInterval(1000);
  }, [dayName, dateName, second, hour, minute,] );
  console.log(weatherData);
  return (
    <m.div 
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="absolute min-w-full"
    >
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-screen-sm mx-auto'>
        <div className={`min-h-[105vh] mb ${ hour >= 18 ? 'bg-slate-900 text-slate-300' : 'bg-orange-400'}`}>
          <div className='items-center justify-center min-h-[80vh] relative px-3'>

          <form onSubmit={handleSubmit}>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="absolute top-10 w-2/3">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeWidth="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border-gray-300 rounded-lg bg-gray-50 " placeholder="Search here.." value={query} onChange={handleInputChange} name="query"></input>
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
              </div>
          </form>
        
            <div className='absolute top-[20vh] overflow-hidden'>
              <m.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.5 }} className='text-4xl font-medium'>{`${ hour } : ${ minute }`}</m.h1>
              <m.p className='font-medium' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.5 }} >{`${dayName} ${dateName}/${ currentMonts+1 }`} </m.p>
              { weatherData && weatherData.data ? (
                <div>
                  <h1 className='font-medium'>{`${weatherData.city_name}, ${weatherData.data[0].weatherData.description}`}</h1>
                  <div className='mt-10 flex'>
                    <h3 className='text-8xl'>{weatherData.data[0].temp}</h3>
                    <div className='flex'>
                      <div className='ratings'></div>
                      <span className='font-medium text-2xl'>c</span>
                    </div>
                  </div>
                </div>
              ) : (
                  <p className='text-red-500 font-bold text-5xl'>{weatherData.message} Reached limit 25</p>
              )}
              {/* <div>
                {location ? (
                  <h1>{weather.city_name}</h1>
                  <p>from: {location.latitude}, {location.longitude}</p>
                ) : (
                  <p>Unable to retrieve your location</p>
                )}
              </div> */}
            </div>
            
          </div>
          <Footer />
        </div>
      </main>
    </m.div>

  )
}
              
{/* export async function getServerSideProps() {
  let weatherData = []
  
   try {
     const response = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly', {
       method: 'GET',
       params: {lat: '-8.4326215', lon: '114.1669654'},
       headers: {
        'X-RapidAPI-Key': 'aea5e6f851msh0d3019689849da1p138e04jsn8b38e8f2988a',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
     })
     weatherData = response.data
   } catch (error) {
     console.log(error);
   }
 
   return {
     props: { weatherData }
   }
 }*/}
