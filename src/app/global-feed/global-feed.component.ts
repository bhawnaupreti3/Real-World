import { Component, OnInit } from '@angular/core';
import { GlobalFeedService } from '../services/global-feed.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit {
  public selected: Array<Object>;
  constructor(private globalFeedService: GlobalFeedService , private router:ActivatedRoute,private route :Router) { }

  ngOnInit() {
     this.globalFeedService.getGlobalFeed().subscribe((current:Array<Object>)=>{
       this.articlesFetched(current);
     })
  }

  articlesFetched(articles){
    this.selected=articles;
  }

  getArticleDetails(data) {
    this.route.navigate(['articles', data]);

  }
  callProfile(username) {
    console.log(username);
    this.route.navigate(["User-Profile", username])

  }
}
