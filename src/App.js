import { useDispatch, useSelector } from "react-redux";
import {
  fecthAsynclatlong,
  getWeatherlocation,
  getlistwe,
  listweathers,
} from "./redux/weather/weatherSlice";
import { useEffect, useState } from "react";
import WeatherListen from "./componen/WeatherListen";
import { Container, Button } from "./styled/styled";
import Listwether5day from "././componen/Listwether5day";
import styled from "styled-components";
const App = () => {
  const dispash = useDispatch();
  const weats = useSelector(getWeatherlocation);
  const listwetherday = useSelector(getlistwe);
  const [location, setLocation] = useState({
    lat: 0,
    lon: 0,
  });
  console.log(weats);
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
  const Mainbody = styled.div`
    color: white;
    margin: 0 40px;
    padding: 60px 0;
    &.main-list-itemdate {
      display: flex;
      overflow-x: auto;
      padding: 20px 40px;
    }
  `;

  function handleClick(location) {
    return () => {
      dispash(fecthAsynclatlong(location));
    };
  }
  if (weats.length === 0) return <h1>Loadding......</h1>;
  else
    return (
      <div className="App">
        <Container className="btn-grup">
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
            return (
              <Listwether5day
                dataa={a}
                datenow={a.dt_txt}
                temptb={a.main.temp}
                icon={a.weather[0]}
              />
            );
          })}
        </Mainbody>
      </div>
    );
};

export default App;
