import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalFeedService {
  apiUrl: string='https://conduit.productionready.io/api/';
  user:Object;

  constructor(private http: HttpClient) { }

  getGlobalFeed(){
    return this.http.get(`${this.apiUrl}articles`);
  
  }
  // makeFeedsRequestonPages(offset){
  //   return this.http.get(`${this.apiUrl}articles?limit=10&offset=${offset}`)
  //  }
   getTagDetails(e){
    return this.http.get(`${this.apiUrl}articles?tag=${e}`)
   }
}
