import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewArticleService {
    apiUrl: string='https://conduit.productionready.io/api/';
    constructor(private http: HttpClient) { }
    publishArticle(data){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization':'Token '+localStorage.getItem('Token')
        })
      };
      console.log(JSON.stringify(data));
      var a= this.http.post(`${this.apiUrl}articles`,JSON.stringify(data),httpOptions);
      return a;
    }
  }
