import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {profile} from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/api/profiles';

  addProfile(newProfile: profile) {
    return this.http.post<profile>(`${this.baseUrl}`, newProfile).map(res => res);
  }

  getProfiles(token: string){
    return this.http.get<profile[]>(`${this.baseUrl}`, {headers: {Authorization: token}}).map(res => res);
  }

  editProfile(newVideo: profile, id: string, token: string){
    return this.http.put<profile>(`${this.baseUrl}` + id, newVideo, {headers: {Authorization: token}}).map(res => res);
  }

  deleteProfile(id: string, token: string){
    return this.http.delete<profile>(`${this.baseUrl}` + id, {headers: {Authorization: token}}).map(res => res);
  }
}
