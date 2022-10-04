import { useDispatch, useSelector } from "react-redux";
import {
  fecthAsyncWeathers,
  getWeather,
  getWeatherUseLat3day,
  fecthAsyncWeathersLats,
  getWeatherUseLat,
  fecthAsyncWeathersThere,
} from "./redux/weather/weatherSlice";
import { useCallback, useEffect, useState } from "react";
import WeatherListen from "./componen/WeatherListen";
import { Container, Button } from "./styled/styled";

const App = () => {
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
  });
  const weatsLatLong = useSelector(getWeatherUseLat);
  const weats = useSelector(getWeather);
  const weather3day = useSelector(getWeatherUseLat3day);
  const dispash = useDispatch();
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        ...location,
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const buttonVal = [
    {
      name: "Hanoi",
      location: {
        lat: 21.0213892,
        lon: 105.7911108,
      },
    },
    {
      name: "London",
      location: {
        lat: 51.5085,
        lon: -0.1257,
      },
    },
    {
      name: "Sydney",
      location: {
        lat: -33.8679,
        lon: 151.2073,
      },
    },
    {
      name: "Paris",
      location: {
        lat: 48.8534,
        lon: 2.3488,
      },
    },
  ];
  useEffect(() => {
    dispash(fecthAsyncWeathersThere(location));
  }, [location]);
  useEffect(() => {
    dispash(fecthAsyncWeathersLats(location));
  }, [location]);
  const handleClick = (location) => () => {
    dispash(fecthAsyncWeathersLats(location));
    dispash(fecthAsyncWeathersThere(location));
  };

  if (weats.length === 0) return <h1>Loadding......</h1>;
  else
    return (
      <div className="App">
        <Container className="btn-grup">
          {buttonVal.map((a, i) => (
            <Button key={i} className="btn" onClick={handleClick(a.location)}>
              {a.name}
            </Button>
          ))}
        </Container>
        <WeatherListen data={weatsLatLong} three={weather3day} />
      </div>
    );
};

export default App;
