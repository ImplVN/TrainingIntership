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
<<<<<<< HEAD
export const fecthAsyncWeathersLats = createAsyncThunk(
  "weather / fecthAsyncWeathersLats",
=======


export const fecthAsynclatlong = createAsyncThunk(
  "weather / fecthAsynclatlong",
>>>>>>> them 1 so component
  async (location) => {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&APPID=${Apikey}`
      )
      .catch((err) => console.log("ERROR", err));
    return res.data;
  }
);
<<<<<<< HEAD
export const fecthAsyncWeathersThere = createAsyncThunk(
  "weather / fecthAsyncWeathersThere",
=======

export const listweathers = createAsyncThunk(
  "weather / listweathers",
>>>>>>> them 1 so component
  async (location) => {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&APPID=${Apikey}`
      )
      .catch((err) => console.log("ERROR", err));
    return res.data;
  }
);
<<<<<<< HEAD
const initialState = {
  weather: [],
  weather3to5: [],
=======

const initialState = {
  weather: [],
  weatherlocation : [],
  listwe:[]
>>>>>>> them 1 so component
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [fecthAsyncWeathers.pending]: () => {},
    [fecthAsyncWeathers.fulfilled]: (state, { payload }) => {
      return { ...state, weather: payload };
    },
<<<<<<< HEAD
    [fecthAsyncWeathersLats.fulfilled]: (state, { payload }) => {
      return { ...state, weather: payload };
    },
    [fecthAsyncWeathersThere.fulfilled]: (state, { payload }) => {
      return { ...state, weather3to5: payload };
=======
    [fecthAsynclatlong.fulfilled]: (state, { payload }) => {
      return { ...state, weatherlocation: payload };
    },
    [listweathers.fulfilled]: (state, { payload }) => {
      return { ...state, listwe: payload };
>>>>>>> them 1 so component
    },
  },
});
export const getWeather = (state) => state.weather.weather;
<<<<<<< HEAD
export const getWeatherUseLat = (state) => state.weather.weather;
export const getWeatherUseLat3day = (state) => state.weather.weather3to5;
=======
export const getWeatherlocation = (state) => state.weather.weatherlocation;
export const getlistwe = (state) => state.weather.listwe;

>>>>>>> them 1 so component
export default weatherSlice.reducer;
