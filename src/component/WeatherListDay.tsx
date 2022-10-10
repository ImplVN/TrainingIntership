import { useAppSelector } from "../redux/store";
import { Weather5Day, Weather5DayItem } from "../CpnCSS.css/mainCss";

const WeatherListDay = (): JSX.Element => {
  const { listwe } = useAppSelector((state) => state.weather);
  if (listwe === null) return <h1>Loading...</h1>;

  return (
    <Weather5Day>
      {listwe.list.map((a) => {
        const src = `http://openweathermap.org/img/wn/${a.weather[0].icon}@2x.png`;
        return (
          <Weather5DayItem key={a.dt_txt}>
            <div>{a.dt_txt}</div>
            <img src={src} alt='img weather'/>
            <div>{(a.main.temp - 273).toFixed(0)}°C</div>
          </Weather5DayItem>
        );
      })}
    </Weather5Day>
  );
};
export default WeatherListDay;
