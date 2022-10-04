import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const Apikey = "ae2bfc472e9eae631c8ae4f39c12d98d";

export const fecthAsyncWeathers = createAsyncThunk(
  "weather / fecthAsyncWeathers",
  async (NationAndCountry) => {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${NationAndCountry}&APPID=${Apikey}`
      )
      .catch((err) => console.log("ERROR", err));
    return res.data;
  }
);
export const fecthAsyncWeathersLats = createAsyncThunk(
  "weather / fecthAsyncWeathersLats",
  async (location) => {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&APPID=${Apikey}`
      )
      .catch((err) => console.log("ERROR", err));
    return res.data;
  }
);
export const fecthAsyncWeathersThere = createAsyncThunk(
  "weather / fecthAsyncWeathersThere",
  async (location) => {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&APPID=${Apikey}`
      )
      .catch((err) => console.log("ERROR", err));
    return res.data;
  }
);
const initialState = {
  weather: [],
  weather3to5: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [fecthAsyncWeathers.pending]: () => {},
    [fecthAsyncWeathers.fulfilled]: (state, { payload }) => {
      return { ...state, weather: payload };
    },
    [fecthAsyncWeathersLats.fulfilled]: (state, { payload }) => {
      return { ...state, weather: payload };
    },
    [fecthAsyncWeathersThere.fulfilled]: (state, { payload }) => {
      return { ...state, weather3to5: payload };
    },
  },
});
export const getWeather = (state) => state.weather.weather;
export const getWeatherUseLat = (state) => state.weather.weather;
export const getWeatherUseLat3day = (state) => state.weather.weather3to5;
export default weatherSlice.reducer;
