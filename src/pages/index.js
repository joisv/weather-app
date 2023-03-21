import Head from 'next/head'
import Footer from './footer'
import { motion as m } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {

  const [dayName, setDayName] = useState('');
  const [dateName, setDateName] = useState('');
  const [second, setSeconds] = useState(0);
  const [hour, setHours] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [currentMonts, setCurrentMonth] = useState(0);
  
  let today = new Date();
  const currentMonth = today.getMonth();
  let date = today.getDate()
  let day = today.getDay();
  let daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  let currentDayName = daysOfWeek[day];

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  
  useEffect(() => {
      setDayName(currentDayName)
      setDateName(date)
      setHours(hours)
      setMinutes(minutes)
      setCurrentMonth(currentMonth)
      // const interval = setInterval(() => {
      //     setSeconds(seconds);
      // }, 1000);
      // return () => clearInterval(interval);
  }, [dayName, dateName, second, hour, minute] );
  
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
      <main>
        <div className='min-h-[105vh] bg-red-500 mb'>
          <div className='items-center justify-center min-h-[80vh] relative px-3'>
            <div className='absolute top-[20vh] overflow-hidden'>
              <m.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.5 }} className='text-4xl font-medium'>{`${ hour } : ${ minute }`}</m.h1>
              <m.p className='font-medium' initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.75, delay: 0.5 }} >{`${dayName} ${dateName}/${ currentMonts+1 }`}</m.p>
            </div>
           
          </div>
          <Footer />
        </div>
      </main>
    </m.div>

  )
}
