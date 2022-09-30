import React from "react";
import Bodydow from "./Bodydow";
import { Container, Text } from "../styled/styled";
const WeatherListen = (props) => {
  const { data } = props;
  const date = new Date();

  return (
    <div>
      <Container className="colum">
        <Container>
          <Text className="text-space">
            Thứ {date.getDay() + 1} {date.getDate()}-{date.getMonth() + 1}-
            {date.getFullYear()} | Local time : {date.getHours()}:
            {date.getMinutes()}{" "}
            {date.getHours() > 12 && date.getHours() <= 23 ? "PM" : "AM"}
          </Text>
        </Container>
        <Container>
          <Text className="text-space size">
            {data?.name ? data.name : "Hanoi"} -
            {data?.sys.country ? data?.sys.country : "VN"}
          </Text>
        </Container>
      </Container>
      <Bodydow
        cloudy={data.weather[0]}
        data={data}
        icon={data.weather[0]}
        temp={data.main}
        feels={data.main}
        wind={data.wind}
        suntime={data.sys}
        tempmax={data.main}
        tempmin={data.main}
      />
    </div>
  );
};

export default WeatherListen;
