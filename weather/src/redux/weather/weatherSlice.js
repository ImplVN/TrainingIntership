import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const Apikey = "60be92b2ddf19a012433571de96eb031";

export const fecthAsyncWeathers = createAsyncThunk(
  "weather / fecthAsyncWeathers",
  async () => {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=21.028511&lon=105.804817&appid=${Apikey}`
      )
      .catch((err) => console.log("ERROR", err));
    return res.data;
  }
);

const initialState = {
  weather: {},
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [fecthAsyncWeathers.pending]: () => {
      console.log("pending");
    },
    [fecthAsyncWeathers.fulfilled]: (state, { payload }) => {
      console.log("Cekiuration");
      return { ...state, weather: payload };
    },
  },
});
export const getWeather = (state) => state.weather.weather;
export default weatherSlice.reducer;
