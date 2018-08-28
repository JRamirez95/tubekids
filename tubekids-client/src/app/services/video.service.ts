import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';

import { video } from "../models/video";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/api/videos';

  addVideo(newVideo: video, token: string){
    return this.http.post<video>(`${this.baseUrl}`, newVideo,{headers: {Authorization: token}}).map(res => res);
  }

  getVideos(token: string){
    return this.http.get<video[]>(`${this.baseUrl}`, {headers: {Authorization: token}}).map(res => res);
  }

  editVideo(newVideo: video, id: string, token: string){
    return this.http.put<video>(`${this.baseUrl}` + id, newVideo, {headers: {Authorization: token}}).map(res => res);
  }

  deleteVideo(id: string, token: string){
    return this.http.delete<video>(`${this.baseUrl}` + id, {headers: {Authorization: token}}).map(res => res);
  }
}
