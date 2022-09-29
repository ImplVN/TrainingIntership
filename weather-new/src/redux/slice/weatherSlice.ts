import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WEATHER, Loca_tion, LIST_WEATHER } from "../../interface/type";
import axios from "axios";

export const Apikey: string = "ae2bfc472e9eae631c8ae4f39c12d98d";

export const fecthAsyncWeathers = createAsyncThunk<WEATHER, Loca_tion>(
  "weather / fecthAsyncWeathers",
  async (loca: Loca_tion, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${loca.lat}&lon=${loca.lon}&APPID=${Apikey}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const listweathers = createAsyncThunk<LIST_WEATHER, Loca_tion>(
  "weather / listweathers",
  async (loca: Loca_tion, thunkAPI) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${loca.lat}&lon=${loca.lon}&APPID=${Apikey}`
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
interface Initial_State {
  weather: WEATHER | null;
  listwe: LIST_WEATHER | null;
}
const initialState: Initial_State = {
  weather: null,
  listwe: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fecthAsyncWeathers.fulfilled,
      (state, action: PayloadAction<WEATHER>) => {
        state.weather = action.payload;
      }
    );
    builder.addCase(
      listweathers.fulfilled,
      (state, action: PayloadAction<LIST_WEATHER>) => {
        state.listwe = action.payload;
      }
    );
  },
});

export default weatherSlice.reducer;
