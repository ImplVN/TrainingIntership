import React from "react";
import { Item, TextF } from "../styled/styled";

const Listtrain = (props) => {
  const { weather } = props;
  return (
    <Item className="item">
      <TextF className="text">{weather.dt_txt}</TextF>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      />
      <TextF className="text">
        {(weather.main.temp_max - 273).toFixed(0)}°-
        {(weather.main.temp_min - 273).toFixed(0)}°
      </TextF>
    </Item>
  );
};

export default Listtrain;
