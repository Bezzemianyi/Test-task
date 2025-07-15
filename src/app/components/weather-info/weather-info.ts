import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Weather } from '../../models/weather.model.js';

@Component({
  selector: 'app-weather-info',
  standalone: true,
  imports: [NgIf],
  templateUrl: './weather-info.html',
  styleUrl: './weather-info.scss',
})
export class WeatherInfo {
  @Input() weather!: Weather;

  getIcon(temp: number): string {
    if (temp < 0) return 'assets/icons/cold.png';
    if (temp < 15) return 'assets/icons/cool.png';
    if (temp < 25) return 'assets/icons/warm.png';
    return 'assets/icons/hot.png';
  }

  getWeatherIcon(code: number): string {
    if ([0].includes(code)) return 'assets/icons/clear.png';
    if ([1, 2, 3].includes(code)) return 'assets/icons/cloudy.png';
    if ([45, 48].includes(code)) return 'assets/icons/fog.png';
    if ([51, 53, 55].includes(code)) return 'assets/icons/drizzle.png';
    if ([61, 63, 65].includes(code)) return 'assets/icons/rain.png';
    if ([71, 73, 75].includes(code)) return 'assets/icons/snow.png';
    if ([95, 96, 99].includes(code)) return 'assets/icons/thunder.png';
    return 'assets/icons/unknown.png';
  }
}
