import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  public username:string;
  public image:string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.username=localStorage.getItem('username');
    this.image=localStorage.getItem('image');
  }
   
  viewProfile(){
    this.router.navigate(["User-Profile",localStorage.getItem('username')]);
  }

}
