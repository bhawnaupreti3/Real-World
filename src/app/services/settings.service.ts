import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  apiUrl: string='https://conduit.productionready.io/api/';
  username: string;
  constructor(private http: HttpClient) { }
  getProfile(){
   this.username=localStorage.getItem('username');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
   return this.http.get(`${this.apiUrl}user`,httpOptions);
  }
  updateProfile(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    return this.http.put(`${this.apiUrl}user`,JSON.stringify(user),httpOptions);
  }
 
}