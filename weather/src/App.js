import { useDispatch, useSelector } from "react-redux";
import {
  fecthAsyncWeathers,
  getWeather,
<<<<<<< HEAD
  getWeatherUseLat3day,
  fecthAsyncWeathersLats,
  getWeatherUseLat,
  fecthAsyncWeathersThere,
} from "./redux/weather/weatherSlice";
import { useCallback, useEffect, useState } from "react";
=======
  fecthAsynclatlong,
  getWeatherlocation,
  getlistwe,
  listweathers,
} from "./redux/weather/weatherSlice";
import { useEffect, useState } from "react";
>>>>>>> them 1 so component
import WeatherListen from "./componen/WeatherListen";
import { Container, Button } from "./styled/styled";
import Listwether5day from "././componen/Listwether5day";
import styled from "styled-components";
const App = () => {
<<<<<<< HEAD
=======
  const dispash = useDispatch();
  const weats = useSelector(getWeatherlocation);
  const listwetherday = useSelector(getlistwe);
>>>>>>> them 1 so component
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
  });
<<<<<<< HEAD
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
=======

  function getlocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }

  useEffect(() => {
    getlocation();
  }, []);

  useEffect(() => {
    dispash(fecthAsynclatlong(location));
  }, [location]);

  useEffect(() => {
    dispash(listweathers(location));
  }, []);

  const arrlocation = [
>>>>>>> them 1 so component
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
<<<<<<< HEAD
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

=======
  const Mainbody = styled.div`
  color: white;
    margin: 0 40px;
    padding: 60px 0;
    &.main-list-itemdate {
      display: flex;
      overflow-x: auto;
      padding:20px 40px,
      
    }
  `;



  function handleClick(location) {
    return () => {
      dispash(fecthAsynclatlong(location));
    };
  }
>>>>>>> them 1 so component
  if (weats.length === 0) return <h1>Loadding......</h1>;
  else
    return (
      <div className="App">
        <Container className="btn-grup">
<<<<<<< HEAD
          {buttonVal.map((a, i) => (
            <Button key={i} className="btn" onClick={handleClick(a.location)}>
              {a.name}
            </Button>
          ))}
        </Container>
        <WeatherListen data={weatsLatLong} three={weather3day} />
=======
          {arrlocation.map((a) => {
            return (
              <Button className="btn" onClick={handleClick(a.location)}>
                {a.name}
              </Button>
            );
          })}
        </Container>
        <WeatherListen data={weats} />
        <Mainbody className="main-list-itemdate">
          {listwetherday.list?.map((a) => {
            return (<Listwether5day
                dataa={a}
                datenow={a.dt_txt}
                temptb={a.main.temp}
                icon={a.weather[0]}
              />
            );
          })}
        </Mainbody>
>>>>>>> them 1 so component
      </div>
    );
};

export default App;
