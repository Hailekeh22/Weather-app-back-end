import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY;

export const fetchWether = async (req, res) => {
  const lat = req.body.latitude;
  const lon = req.body.longtude;
  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  res.send(weatherData.data);
};
