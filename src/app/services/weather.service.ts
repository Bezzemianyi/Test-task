import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from '../models/weather.model.js';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private weatherApiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getWeather(latitude: number, longitude: number): Observable<Weather> {
    const url = `${this.weatherApiUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;

    return this.http.get<any>(url).pipe(
      map((data) => ({
        current_weather: {
          temperature: data.current_weather.temperature,
          weathercode: data.current_weather.weathercode,
        },
        temperature_now: data.current_weather.temperature,
        temperature_min: data.daily.temperature_2m_min[0],
        temperature_max: data.daily.temperature_2m_max[0],
        weather_code: data.current_weather.weathercode,
      }))
    );
  }
}
