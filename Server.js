import express from "express";
import dotenv from "dotenv";
import { searchCityWeather } from "./routes/routes.js";

dotenv.config();

const port = process.env.port;
const app = express();
app.use(express.json());

app.use(searchCityWeather);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
