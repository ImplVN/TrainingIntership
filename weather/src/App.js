import { useDispatch, useSelector } from "react-redux";
import { fecthAsyncWeathers, getWeather } from "./redux/weather/weatherSlice";
import { useEffect } from "react";
import WeatherListen from "./componen/WeatherListen";
// import { styles } from "./componen/WeatherListen";
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
        {/* <div style={styles.container}>
          <button
            onClick={handleClick}
            style={styles.button}
            value={"Hanoi,vn"}
          >
            Hanoi
          </button>
          <button
            onClick={handleClick}
            style={styles.button}
            value={"London,uk"}
          >
            London
          </button>
          <button
            onClick={handleClick}
            style={styles.button}
            value={"Sydney,au"}
          >
            Sydney
          </button>
          <button
            onClick={handleClick}
            style={styles.button}
            value={"Tokyo,jp"}
          >
            Tokyo
          </button>
          <button
            onClick={handleClick}
            style={styles.button}
            value={"Paris,fr"}
          >
            Paris
          </button>
        </div> */}
        <WeatherListen data={weats} />
      </div>
    );
};

export default App;
