import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.API_KEY;

export const searchCityWeatherInfo = async (req, res) => {
  const city = req.body.city;

  const Weatherdata = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  res.send(Weatherdata.data);
};
