import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';


import { user } from '../models/user';
import { token } from '../models/token';
import { singIn } from "../models/singIn";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000';

  addUser(newUser: user) {
    return this.http.post<user>(`${this.baseUrl}/api/register`, newUser).map(res => res);
  }

  loginToken(newUser: singIn){
    return this.http.post<token>(`${this.baseUrl}/api/login`, newUser).map(user => user);
  }

  singInUser(newUser: singIn){
    return this.http.post<user>(`${this.baseUrl}/api/login`, newUser).map(user => user);
  }

  userAuthentification(email,password) {
    let data = "email="+email+"&password="+password;
    console.log(data);
    return this.http.post(`${this.baseUrl}/api/login`, data).map(res => res);
  }
}
