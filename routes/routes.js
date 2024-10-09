import { Router } from "express";
import { fetchWether } from "../controllers/fetchWeater.js";
import { searchCityWeatherInfo } from "../controllers/searchCity.js";

export const getWeather = Router();
export const searchCityWeather = Router();

getWeather.post("/getweather", fetchWether);
searchCityWeather.post("/searchcity", searchCityWeatherInfo);
