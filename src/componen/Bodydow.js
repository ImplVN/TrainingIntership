import dayjs from "dayjs";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import styled from "styled-components";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import AirIcon from "@mui/icons-material/Air";

const Divmain = styled.div`
  &.main {
    background-color: #2e3379;
    color: white;
    padding: 20px 40px;
    width: 100%;
  }
`;
const Cloudsor = styled.h3`
  &.cloudy {
    text-align: center;
  }
`;
const Maincontent = styled.div`
  &.maincontent {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 20px 0;
  }
`;

const Dflex = styled.div`
  &.d-flex {
    display: flex;
    align-items: center;
  }
  &.d-flex-v2 {
    margin-bottom: 6px;
  }
`;

const Dashmargin = styled.div`
  &.dshmr {
    margin-right: 10px;
  }
`;
const Dflexall = styled.div`
  &.d-fex-f {
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 40%;
    align-items: center;
  }
`;

function Bodydow(props) {
  const src = "src={`http://openweathermap.org/img/wn/${icon.icon}@2x.png`}";
  const { cloudy, data, icon, temp, feels, wind, suntime, tempmax, tempmin } =
    props;

  // fetch('https://geolocation-db.com/json/')
  // .then((response) => response.json())
  // .then((ac) => <Locall loca = {ac} />);

  // function Locall({loca}){
  //   console.log(loca);

  //   return <>a</>
  // }

  let now = dayjs();

  return (
    <Divmain className="main">
      <Cloudsor className="cloudy">
        {cloudy.main} or {cloudy.description}
      </Cloudsor>
      <Maincontent className="maincontent">
        <img
          className="img-icon"
          src={`http://openweathermap.org/img/wn/${icon.icon}@2x.png`}
        />
        <h1>{(temp.temp - 273).toFixed(0)}°C</h1>
        <div>
          <Dflex className="d-flex d-flex-v2">
            <DeviceThermostatIcon
              sx={{ color: "white", marginRight: "10px" }}
              className="icon-temp"
            />
            {(temp.feels_like - 273).toFixed(0)}°
          </Dflex>
          <Dflex className="d-flex d-flex-v2">
            <InvertColorsIcon
              sx={{ color: "white", marginRight: "10px" }}
              className="icon-temp"
            />
            {feels.humidity}%
          </Dflex>
          <Dflex className="d-flex d-flex-v2">
            <AirIcon
              sx={{ color: "white", marginRight: "10px" }}
              className="icon-temp"
            />
            {wind.speed} Km/h
          </Dflex>
        </div>
      </Maincontent>

      <Dflexall className="d-fex-f d-flex-2">
        <Dflex className="d-flex">
          <LightModeIcon sx={{ marginRight: "10px" }} />

          <div>Rise {dayjs(suntime.sunrise * 1000).format("HH:mm")} AM</div>
        </Dflex>
        <div>
          <Dflex className="d-flex">
            <WbTwilightIcon sx={{ marginRight: "10px" }} />
            Set {dayjs(suntime.sunset * 1000).format("HH:mm")} AM |
          </Dflex>
        </div>
        <Dflex className="d-flex">
          <LightModeIcon sx={{ marginRight: "10px" }} />
          <div>{(tempmax.temp_max - 273).toFixed(0)}°C</div>
        </Dflex>

        <Dflex className="d-flex">
          <LightModeIcon sx={{ marginRight: "10px" }} />
          <div>{(tempmin.temp_min - 273).toFixed(0)}°C</div>
        </Dflex>
      </Dflexall>
    </Divmain>
  );
}

export default Bodydow;
