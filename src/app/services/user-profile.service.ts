import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  apiUrl: string='https://conduit.productionready.io/api/';
  constructor(private http: HttpClient) { }
  getProfile(username){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
   return this.http.get(`${this.apiUrl}profiles/${username}`);
  }
  makeFeedsRequestonPages(offset){
    return this.http.get(`${this.apiUrl}articles?limit=10&offset=${offset}`)
   }
  getUserArticles(username){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    return this.http.get(`${this.apiUrl}articles?author=${username}`);
  }
  getFavoriteArticles(username){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    return this.http.get(`${this.apiUrl}articles?favorited=${username}`);
  }
}