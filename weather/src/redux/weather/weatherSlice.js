import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const Apikey = "60be92b2ddf19a012433571de96eb031";

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

const initialState = {
  weather: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [fecthAsyncWeathers.pending]: () => {
    },
    [fecthAsyncWeathers.fulfilled]: (state, { payload }) => {
      return { ...state, weather: payload };
    },
  },
});
export const getWeather = (state) => state.weather.weather;
export default weatherSlice.reducer;
