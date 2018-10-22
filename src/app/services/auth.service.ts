import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string='https://conduit.productionready.io/api/';
  currentUser:Object;

  constructor(private http : HttpClient) { }

  login(user) { 

    console.log(JSON.stringify(user));
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    // let userLoginObject = {"user": user};
    //  console.log(JSON.stringify({currentUser}));
    // return this.http.post(`${this.apiUrl}users/login`, userLoginObject)
    // .map(response =>{
    //     let result= JSON.stringify(response)
    // let result = this.http.post(`${this.apiUrl}users/login`, userLoginObject)
    //     console.log(result);
    var a= this.http.post(`${this.apiUrl}users/login`,JSON.stringify({user}),httpOptions);
    return a;
        // if(a && a.token){
          
        //   localStorage.setItem('token', a.token);
        //   return true;
        // }
        // return false;
    
     
   }

   signUp(user) { 

    console.log(JSON.stringify(user));
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    // let userLoginObject = {"user": user};
    //  console.log(JSON.stringify({currentUser}));
    // return this.http.post(`${this.apiUrl}users/login`, userLoginObject)
    // .map(response =>{
    //     let result= JSON.stringify(response)
    // let result = this.http.post(`${this.apiUrl}users/login`, userLoginObject)
    //     console.log(result);
    var a= this.http.post(`${this.apiUrl}users`,JSON.stringify({user}),httpOptions);
    console.log(a);
    return a;
   
        // if(a && a.token){
          
        //   localStorage.setItem('token', a.token);
        //   return true;
        // }
        // return false;
    
     
   }

   logout() { 
  }

  isLoggedIn() { 
    return false;
  }
}
