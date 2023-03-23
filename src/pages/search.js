import useWeather from "@/functions/fetch";

export default function search(props) {
    // const { searchWeather, searchWeatherData } = useWeather()
    // console.log(searchWeather);
    console.log(props.datas);
    return (
    <div>
        <h1>halo dunia</h1>
    </div>
    )
}


export async function getServerSideProps(context) {
    const { query }= context;
    const datas = query
   

    return{
        props:{ datas }
    }

}