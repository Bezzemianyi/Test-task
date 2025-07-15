import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service.js';
import { WeatherService } from '../../services/weather.service.js';
import { UserCard } from '../user-card/user-card.js';
import { NgForOf } from '@angular/common';
import { User } from '../../models/user.model.js';

@Component({
  selector: 'app-user-list',
  imports: [NgForOf, UserCard],
  standalone: true,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private weatherService: WeatherService) {}

  ngOnInit() {
  this.userService.getRandomUser().subscribe(data => {
    this.users = data.results;
    this.users.forEach(user => {
      this.weatherService.getWeather(
        +user.location.coordinates.latitude,
        +user.location.coordinates.longitude
      ).subscribe((weatherData: any) => {
        user.weather = weatherData; 
      });
    });
  });
}
}

