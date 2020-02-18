import axios from "axios";

export function fetchWeatherData() {
  return axios
    .get(
      "https://api.weatherbit.io/v2.0/forecast/daily?city_id=2643123&days=7&key=96730161f26d45cdaa8373998e19468d"
    )
    .then(response => {
      const weatherData = [];
      Object.keys(response.data.data).forEach(forecast => {
        weatherData.push({
          temperature: response.data.data[forecast].temp,
          weather: response.data.data[forecast].weather.code
        });
      });
      return weatherData;
    });
}
