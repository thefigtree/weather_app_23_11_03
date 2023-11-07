import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "3f9e3f2cf44797f30a946718ec556fdc",
  },
});

export const getWeather = ({ queryKey }) => {
  const [weather, lat, lon] = queryKey;
  return instance
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
};

// 현재 위치를 가져오는 매서드
// => navigator.geolocation.getCurrentPosition(location)
