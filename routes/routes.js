import { Router } from "express";
import { searchCityWeatherInfo } from "../controllers/searchCity.js";

export const searchCityWeather = Router();

searchCityWeather.post("/searchcity", searchCityWeatherInfo);
