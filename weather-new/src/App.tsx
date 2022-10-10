import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { fecthAsyncWeathers, listweathers } from "./redux/slice/weatherSlice";
import "./App.css";
import WeatherListDay from "./component/WeatherListDay";
import { Loca_tion, TYPE_BTN_DATA } from "./interface/type";
import WeatherListing from "./component/WeatherListing";
import { Main, Mainbtn, Button } from "./CpnCSS.css/mainCss";

function App() {
  const arrayLocation: TYPE_BTN_DATA[] = [
    {
      name: "Hanoi",
      loca: {
        lat: 21.0213892,
        lon: 105.7911108,
      },
    },
    {
      name: "London",
      loca: {
        lat: 51.5085,
        lon: -0.1257,
      },
    },
    {
      name: "Sydney",
      loca: {
        lat: -33.8679,
        lon: 151.2073,
      },
    },
    {
      name: "Paris",
      loca: {
        lat: 48.8534,
        lon: 2.3488,
      },
    },
  ];

  const [local, setLocal] = useState<Loca_tion>({
    lat: 0,
    lon: 0,
  });

  const dispatch = useAppDispatch();
  const { weather } = useAppSelector((state) => state.weather);

  function getlocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocal({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }

  useEffect(() => {
    getlocation();
  }, []);

  useEffect(() => {
    dispatch(fecthAsyncWeathers(local));
    dispatch(listweathers(local));
  }, [local, dispatch]);

  function handleclik(datta: Loca_tion) {
    dispatch(listweathers(datta));
    dispatch(fecthAsyncWeathers(datta));
  }
  if (weather === null) return <h1>Loadding...</h1>;
  return (
    <Main className="main">
      <Mainbtn>
        {arrayLocation.map((a, i) => {
          return (
            <Button onClick={() => handleclik(a.loca)} key={i}>
              {a.name}
            </Button>
          );
        })}
      </Mainbtn>
      <WeatherListing weather={weather} />
      <WeatherListDay />
    </Main>
  );
}

export default App;
