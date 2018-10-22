import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
     
  public slected : Object;
  public isLoggedIn :boolean=false;
  // public invalidLogin : boolean =false;
  constructor(private router:Router , private authService:AuthService) { }

  signUp(credentials) {
    console.log(credentials);
    this.authService.signUp(credentials).subscribe((status : Object)=> { 
        console.log(status);
        this.provideData(status);
    });
      // },
      // (err : HttpErrorResponse)=>{
      //   this.invalidLogin = true;
      // });
    }


      provideData(data){
        // console.log(data + 'a');
        this.isLoggedIn=true;
        this.slected=data;
        localStorage.setItem('Token',data.user.token);
        localStorage.setItem('username',data.user.username);
        this.router.navigate(['home-user/your-feed']);
      }
  ngOnInit() {
  }
}
