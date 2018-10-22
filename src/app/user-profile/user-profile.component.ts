import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userProfileService: UserProfileService, private route: Router,private router: ActivatedRoute) { }
  public user: Object;
  public username: string;
  public articles: Array<object>;
  limit: Number = 10;
  public token: string;
  public following:boolean;
  public userUserName:string;
  public userToken:string;
  match:boolean;
  
articleCount:Number
itemPages:any
  
  ngOnInit() {

    this.router.paramMap.subscribe(params => {
      this.username = params.get("username");
      this.userUserName=localStorage.getItem('username');
      console.log(this.userToken);
      this.userToken=localStorage.getItem('Token');
      this.match=false;
      if(this.userToken){
        if(this.userUserName===this.username){
          this.match=true;
        }
      }
      this.userProfileService.getProfile(this.username).subscribe((status)=>{
        console.log(status);
        this.saveUser(status,this.username);
        this.callUserArticles();
       })
    })
    
  }

  callProfile(username){
    console.log(username);
    this.route.navigate(["User-Profile",username])
  
  }
  saveUser(data,username){
    this.user=data;
    this.username=username;
    this.following=data.profile.following;
    if(localStorage.getItem('Token')){
      this.token=localStorage.getItem('Token');
    }
    }
    
    saveArticles(data){
      this.articles=data;
      this.articleCount=data.articlesCount;
      this.itemPages = Array.from(
        new Array(Math.ceil(+this.articleCount / +this.limit)),
        (val, index) => index + 1
      );
    }
  callSettings(){
      this.route.navigate(["Settings"]);
    }
  callUserArticles(){
    this.userProfileService.getUserArticles(this.username).subscribe((status)=>{console.log(status);
    this.saveArticles(status);
    });
  }
  callFavoriteArticles(){
    this.userProfileService.getFavoriteArticles(this.username).subscribe((status)=>{console.log(status);
      this.saveArticles(status)
    });
  }
  getArticleDetails(data){
    this.route.navigate(['articles',data]);

  }
  clickonList(e){
    let offset = e * +this.limit;
    this.userProfileService.makeFeedsRequestonPages(offset).subscribe((data) => {
        this.saveArticles(data)
       
    });
  }

}
