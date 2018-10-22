import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {

  apiUrl: string='https://conduit.productionready.io/api/';
  user:Object;
  constructor(private http: HttpClient) { }
  getArticleDetails(slug){
    var a= this.http.get(`${this.apiUrl}articles/${slug}`);
    return a;
  }
  modifyArticle(slug,data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token '+localStorage.getItem('Token')
      })
    };
    var a= this.http.put(`${this.apiUrl}articles/${slug}`,JSON.stringify(data),httpOptions);
    return a;
  }
  
}
