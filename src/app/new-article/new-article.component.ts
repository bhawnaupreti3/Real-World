import { Component, OnInit } from '@angular/core';
import {NewArticleService} from '../services/new-article.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  public data: string;
 

  constructor(private newArticleService: NewArticleService, private router: Router, private route:ActivatedRoute ){ }

  ngOnInit() {
  }
  addArticle(details){
   let article={
      title: details.title,
      description: details.description,
      body: details.body,
      tagList: [details.tag]
    }
    
    this.newArticleService.publishArticle(article).subscribe((status:Object)=>{console.log(status);
      this.routeToArticle(status);
    });
   

  }
  routeToArticle(status){
    console.log(status.article.slug);
    this.data=status.article.slug;
    this.router.navigate(['articles',this.data], { relativeTo: this.route});
  }
}
