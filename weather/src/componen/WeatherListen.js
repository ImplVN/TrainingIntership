import React from "react";
import List from "./List";
import Bodydow from "./Bodydow";
<<<<<<< HEAD
import { Container, Item, Text, TextF } from "../styled/styled";
=======
import { Container, Text } from "../styled/styled";
>>>>>>> them 1 so component

const WeatherListen = (props) => {
  const { data, three } = props;
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
            {data?.name} -{data?.sys.country}
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
      <TextF className="text">Wearth 5 day</TextF>
      <List data={three.list} />
    </div>
  );
};

export default WeatherListen;
