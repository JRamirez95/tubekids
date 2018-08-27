import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { playlist } from '../models/Playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }

  domain: string = 'http://localhost:3000';


  addPlaylist(newPlayList: playlist, token: string) {
    console.log("aca voy");
    return this.http.post<playlist>(`${this.domain}`, newPlayList ,{headers: { Authorization: token}}).map(res => res);
  }
  getPlaylistS(token: string) {
    return this.http.get<playlist[]>(`${this.domain}` ,{headers: { Authorization: token}}).map(res => res);
  }
}
