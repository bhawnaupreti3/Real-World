import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public user:Object;
  public username:string;
  constructor(private SettingsService : SettingsService, private router:Router) {}

  ngOnInit() {
    this.SettingsService.getProfile().subscribe((status)=>{
      this.userData(status);
    })
  }

  userData(data){
    this.user=data;
  }

  updateSettings(credentials){
    this.username=localStorage.getItem('username');
    this.SettingsService.updateProfile(credentials).subscribe((status)=>{
      this.router.navigate(["User-Profile",this.username]);
    })
  }
  logout(){
    localStorage.removeItem('Token');
    localStorage.removeItem('username');
    this.router.navigate([""]);
}
}
