export interface Loca_tion {
  lat: number;
  lon: number;
}

export interface Initial_State {
  weather: WEATHER | Object;
  listwe: LIST_WEATHER | Object;
}

export interface WeatherList {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MA_IN {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
  temp_kf?: number;
}
export interface WIND_MIN {
  speed: number;
  deg: number;
  gust: number;
}
export interface CLO_OUD {
  all: number;
}

export interface SYS_TEM {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
export interface PO_D {
  pod: string;
}

export interface LIST_WT {
  dt: number;
  main: MA_IN;
  weather: WeatherList[];
  clouds: CLO_OUD;
  wind: WIND_MIN;
  visibility: number;
  pop: number;
  sys: PO_D;
  dt_txt: string;
}

export interface CY_TY {
  id: number;
  name: string;
  coord: Loca_tion;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WEATHER {
  coord: Loca_tion;
  weather: WeatherList[];
  base: string;
  main: MA_IN;
  visibility: number;
  wind: WIND_MIN;
  clouds: CLO_OUD;
  dt: number;
  sys: SYS_TEM;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface LIST_WEATHER {
  cod: string;
  message: number;
  cnt: number;
  list: LIST_WT[];
  city: CY_TY;
}

export interface TYPE_BTN_DATA {
  name: string;
  loca: Loca_tion;
}
