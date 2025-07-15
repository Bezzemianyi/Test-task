import { Component, Input } from '@angular/core';
import { WeatherInfo } from '../weather-info/weather-info.js';
import { User } from '../../models/user.model.js';

@Component({
  selector: 'app-user-card',
  imports: [WeatherInfo],
  standalone: true,
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  @Input() user!: User;

  getCurrentTemperature(): number {
    return this.user.weather?.current_weather?.temperature ?? 0;
  }

  getWeatherIcon(weatherCode: number): string {
    const weatherMap = [
      { codes: [0], icon: 'assets/icons/weather/sunny.png' },
      { codes: [1, 2, 3], icon: 'assets/icons/weather/cloudy.png' },
      { codes: [45, 48], icon: 'assets/icons/weather/fog.png' },
      { codes: [51, 53, 55], icon: 'assets/icons/weather/drizzle.png' },
      { codes: [61, 63, 65], icon: 'assets/icons/weather/rain.png' },
      { codes: [71, 73, 75], icon: 'assets/icons/weather/snow.png' },
      { codes: [95], icon: 'assets/icons/weather/thunder.png' },
    ];
    for (const weather of weatherMap) {
      if (weather.codes.includes(weatherCode)) {
        return weather.icon;
      }
    }
    return 'assets/icons/weather/default.png';
  }
}
