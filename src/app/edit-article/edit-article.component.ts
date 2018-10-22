import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {EditArticleService} from '../services/edit-article.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  public slug: string;
  public article :object;
    constructor(private route: Router,private router :ActivatedRoute, private editArticle: EditArticleService) { }
  
    ngOnInit() {
      this.router.paramMap.subscribe(params => {
        this.slug = params.get("slug");
        this.editArticle.getArticleDetails(this.slug).subscribe((status: Object )=> {
            this.saveData(status);
            });
        })
    }
    saveData(data){
      this.article=data;
      console.log(this.article);
    }
    updateArticle(details){
      this.editArticle.modifyArticle(this.slug,details).subscribe((status: Object)=>{console.log(status);
      this.route.navigate(['New-Article/articles',this.slug]);
      });
    }

}
