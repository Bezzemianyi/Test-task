import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model.js";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userApiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getRandomUser() {
  return this.http.get<{ results: User[] }>(this.userApiUrl);
}
}
