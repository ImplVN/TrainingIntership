import { useDispatch, useSelector } from "react-redux";
import { fecthAsyncWeathers, getWeather } from "./redux/weather/weatherSlice";
import { useEffect } from "react";
import WeatherListen from "./componen/WeatherListen";
import { Container, Button } from "./styled/styled";

const App = () => {
  const dispash = useDispatch();
  const weats = useSelector(getWeather);
  const Text = "Hanoi,VN";

  useEffect(() => {
    dispash(fecthAsyncWeathers(Text));
  }, []);
  const handleClick = (e) => {
    dispash(fecthAsyncWeathers(e.target.value));
  };
  if (weats.length === 0) return <h1>Loadding......</h1>;
  else
    return (
      <div className="App">
        <Container className="btn-grup">
          <Button className="btn" onClick={handleClick} value={"Hanoi,vn"}>
            Hanoi
          </Button>
          <Button className="btn" onClick={handleClick} value={"London,uk"}>
            London
          </Button>
          <Button className="btn" onClick={handleClick} value={"Sydney,au"}>
            Sydney
          </Button>
          <Button className="btn" onClick={handleClick} value={"Tokyo,jp"}>
            Tokyo
          </Button>
          <Button className="btn" onClick={handleClick} value={"Paris,fr"}>
            Paris
          </Button>
        </Container>
        <WeatherListen data={weats} />
      </div>
    );
};

export default App;
