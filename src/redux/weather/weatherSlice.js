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


export const fecthAsynclatlong = createAsyncThunk(
  "weather / fecthAsynclatlong",
  async (location) => {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&APPID=${Apikey}`
      )
      .catch((err) => console.log("ERROR", err));
    return res.data;
  }
);

export const listweathers = createAsyncThunk(
  "weather / listweathers",
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
  weatherlocation : [],
  listwe:[]
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [fecthAsyncWeathers.pending]: () => {},
    [fecthAsyncWeathers.fulfilled]: (state, { payload }) => {
      return { ...state, weather: payload };
    },
    [fecthAsynclatlong.fulfilled]: (state, { payload }) => {
      return { ...state, weatherlocation: payload };
    },
    [listweathers.fulfilled]: (state, { payload }) => {
      return { ...state, listwe: payload };
    },
  },
});
export const getWeather = (state) => state.weather.weather;
export const getWeatherlocation = (state) => state.weather.weatherlocation;
export const getlistwe = (state) => state.weather.listwe;

export default weatherSlice.reducer;
