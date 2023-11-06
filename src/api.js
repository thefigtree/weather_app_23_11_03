import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "3f9e3f2cf44797f30a946718ec556fdc",
  },
});

export const getWeather = () => {
  const lat = 35.171637080897135;
  const lon = 129.08850637879448;
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};
