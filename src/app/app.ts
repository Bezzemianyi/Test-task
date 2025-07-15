import { Component, signal,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './components/user-list/user-list.js';
import { WeatherInfo } from './components/weather-info/weather-info.js';
import { UserCard } from './components/user-card/user-card.js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserList ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular');

}
