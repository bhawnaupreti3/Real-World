import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public selected: Object;
  public isLogeedIn :boolean=false;
  public invalidLogin :boolean = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  signIn(credentials) {
    console.log(credentials);
    this.authService.login(credentials).subscribe((status : Object)=> { 
        console.log(status);
        this.provideData(status);
      },
      (err : HttpErrorResponse)=>{
        this.invalidLogin = true;
      });
    }


      provideData(data){
        // console.log(data + 'a');
        this.isLogeedIn=true;
        this.selected=data;
        localStorage.setItem('Token',data.user.token);
        localStorage.setItem('username',data.user.username);
        this.router.navigate(['home-user/your-feed']);
      }
        
       
    
      }
      
  


