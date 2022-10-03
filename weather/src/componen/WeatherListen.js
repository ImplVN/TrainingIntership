import React from "react";
import Bodydow from "./Bodydow";
const WeatherListen = (props) => {
  const { data } = props;
  const date = new Date();
  const icon = data.weather[0];

  return (
    <div>
      {/* <div style={styles.container}>
        <span style={styles.text}>
          Thứ {date.getDay() + 1} {date.getDate()}-{date.getMonth() + 1}-
          {date.getFullYear()} | Local time : {date.getHours()}:
          {date.getMinutes()}{" "}
          {date.getHours() > 12 && date.getHours() <= 23 ? "PM" : "AM"}
        </span>
      </div>
      <div style={styles.container}>
        <h2 style={styles.text}>
          {data?.name ? data.name : "Hanoi"} -
          {data?.sys.country ? data?.sys.country : "VN"}
        </h2>
      </div> */}
      <Bodydow 
      cloudy = {data.weather[0]} 
      data = {data} 
      icon = {data.weather[0]}
      temp = {((data.main))}
      feels = {data.main}
      wind = {data.wind}
      suntime = {data.sys}
      tempmax = {data.main}
      tempmin = {data.main}
      />
    </div>
  );
};

export default WeatherListen;
