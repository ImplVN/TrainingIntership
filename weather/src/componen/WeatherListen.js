import { useSelector } from "react-redux";
import { getWeather } from "../redux/weather/weatherSlice";

const WeatherListen = () => {
  const weats = useSelector(getWeather);
  console.log(weats);
  return <div>Viet code vao day</div>;
};

export default WeatherListen;
