import dayjs from "dayjs";
import { WEATHER } from "../interface/type";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { Headweather, Dflex, Colum, Texth1 } from "../CpnCSS.css/mainCss";
interface Props {
  weather: WEATHER;
}

const WeatherListing = (props: Props): JSX.Element => {
  const date = new Date();
  const { weather } = props;

  return (
    <div>
      <Colum>
        <div>
          Thứ {date.getDay() + 1 === 1 ? "CN" : date.getDay() + 1}
          {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()} | Local
          time : {date.getHours()}:{date.getMinutes()}
          {date.getHours() > 12 && date.getHours() <= 23 ? "PM" : "AM"}
        </div>
        <h1>
          {weather.name} - {weather.sys.country}
        </h1>
        <div>
          {weather.weather[0].main} or {weather.weather[0].description}
        </div>
      </Colum>
      <Headweather className="date-country date-country-2">
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="img weather"
          />
        </div>
        <Texth1>{(weather.main.temp - 273).toFixed(0)}°C</Texth1>
        <div>
          <div>
            <DeviceThermostatIcon />
            {(weather.main.feels_like - 273).toFixed(0)}
            °C
          </div>
          <div>
            <OpacityIcon /> {weather.main.humidity}%
          </div>
          <div>
            <AirIcon /> {weather.wind.speed} Km/h
          </div>
        </div>
      </Headweather>
      <Headweather className="date-country date-country-2">
        <Dflex className="Rise-Set">
          <WbSunnyIcon /> Rise
          {dayjs(weather.sys.sunrise * 1000).format("HH:mm")} AM |
        </Dflex>
        <Dflex className="Rise-Set">
          <WbTwilightIcon /> Set
          {dayjs(weather.sys.sunset * 1000).format("HH:mm")} AM |
        </Dflex>
        <Dflex className="Rise-Set">
          <WbSunnyIcon /> {(weather.main.temp_max - 273).toFixed(0)}°C
        </Dflex>
      </Headweather>
    </div>
  );
};
export default WeatherListing;
