import useWeather from "@/functions/fetch";
import { motion as m } from 'framer-motion'
import csvtojson from 'csvtojson';
import axios from "axios";
import { item } from "@/components/animations";

export default function search(props) {

    const dataW = props.dataSearch
    console.log(dataW);

    function fahrenheitToCelsius(fahrenheit) {
        const getCelsius = (fahrenheit - 32) * 5/9;
        const celsius = Math.round(getCelsius)
        return celsius;
      }
    return (
        <main>
            <m.div 
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="absolute w-full"
                >
                <div className="max-w-screen-sm mx-auto bg-gradient-to-tr from-sky-400 to-violet-600 min-h-screen relative px-3">
                    {/* card */}
                    {dataW.map((item, index) => (
                        <div className="relative rounded-md bg-opacity-50 top-20 p-3 bg-slate-200 w-full mb-8 shadow-xl">
                        <div className="text-2xl flex justify-between items-center font-medium">
                            <div>
                                <h1 className="" key={index}>{ item.Address }</h1>
                                <div className="flex items-center gap-2">
                                    <p className="text-base">{item["Date time"]}</p>
                                    <p className="text-lg">{item.Conditions}</p>
                                </div>
                            </div>
                            <div className="flex">
                                <h2 className="text-5xl">{fahrenheitToCelsius(item.Temperature)}</h2>
                                <div className='flex'>
                                    <div className='ratings'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                   
                    
                </div>   
            </m.div>
        </main>
    )
}


export async function getServerSideProps(context) {
    const { query }= context;
    const data = query
   
    let dataSearch = []
    try {
        const response = await axios.get('https://visual-crossing-weather.p.rapidapi.com/forecast', {
          method: 'GET',
          params: {
            aggregateHours: '24',
            location: data.q ,
            contentType: 'csv',
            unitGroup: 'us',
            shortColumnNames: '0'
          },
          headers: {
            'X-RapidAPI-Key': 'aea5e6f851msh0d3019689849da1p138e04jsn8b38e8f2988a',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
          }
        })
        dataSearch = await csvtojson().fromString(response.data);
      } catch (error) {
        console.error(error);
        dataSearch = { errorMessage: 'An error occurred while fetching data.' };
      }

    return{
        props:{ dataSearch }
    }

}