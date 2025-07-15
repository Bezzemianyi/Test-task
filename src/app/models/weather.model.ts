export interface Weather {
  current_weather: {
    temperature: number;
    weathercode: number;
  };
  temperature_now: number;
  temperature_min: number;
  temperature_max: number;
  weather_code: number;
}
