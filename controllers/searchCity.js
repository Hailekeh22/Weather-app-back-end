import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const API_KEY = process.env.API_KEY;

export const searchCityWeatherInfo = async (req, res) => {
  const city = req.body.city;

  try {
    const Weatherdata = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const fetchedData = {
      name: Weatherdata.data.name,
      condition: Weatherdata.data.weather[0].description,
      tempreture: Weatherdata.data.main.temp,
      humidity: Weatherdata.data.main.humidity,
      windSpeed: Weatherdata.data.wind.speed,
    };

    res.send(fetchedData);
  } catch (e) {
    console.log("error");
    res.send("Error Happend");
  }
};
