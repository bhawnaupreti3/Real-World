import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  apiUrl="https://conduit.productionready.io/api/"; 
  constructor(private http: HttpClient) { }
   getAllTags()
{
  return this.http.get(`${this.apiUrl}tags`);
} 
}
