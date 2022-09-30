import { useDispatch } from "react-redux";
import { getWeather, fecthAsyncWeathers } from "./redux/weather/weatherSlice";
import { useEffect } from "react";
import WeatherListen from "./componen/WeatherListen";
const App = () => {
  const dispash = useDispatch();
  useEffect(() => {
    dispash(fecthAsyncWeathers());
  }, []);
  return (
    <div className="App">
      <WeatherListen />
    </div>
  );
};

export default App;
