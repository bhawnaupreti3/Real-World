import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import {ReadArticleService} from '../services/read-article.service';


@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.css']
})
export class ReadArticleComponent implements OnInit {

  public selected: object;
  slug: string;
  public username: string;
  public token: string;
  public match: boolean;
  comments: Array<Object>;
  following:boolean;
  constructor(private router: ActivatedRoute, private readArticleService: ReadArticleService,
    private route: Router) { }

  ngOnInit() {
    this.match = false;
    this.router.paramMap.subscribe(params => {
      this.slug = params.get("slug");
      this.readArticleService.getArticleDetails(this.slug).subscribe((status: Object) => {
        this.saveData(status);
      });

    })
    //It get all the comments of that particular article
    this.readArticleService.getAllComments(this.slug).subscribe((status: Array<Object>) => {
      this.saveComments(status);
    });
  }
  callSignin() {
    this.route.navigate(["Sign-In"]);
  }
  callSignup() {
    this.route.navigate(["Sign-Up"]);
  }
  callProfile(username) {
    console.log(username);
    this.route.navigate(["My-Profile", username])

  }
  saveData(data) {
    this.selected = data;
    this.token = localStorage.getItem('Token');
    this.username = localStorage.getItem('username');
    this.following=data.article.author.following;
    if (this.token) {
      if (this.username === data.article.author.username) {

        this.match = true;
      }
    }
    console.log(this.match);
  }
  saveComments(data) {
    this.comments = data;
  }
  addComment(commentData) {
    this.readArticleService.postComment(commentData, this.slug).subscribe((status: Object) => { this.route.navigate([`New-Article/articles/${this.slug}`]); });
    this.readArticleService.getAllComments(this.slug).subscribe((status: Array<Object>) => {
      this.saveComments(status);
      window.location.reload();
    });

  }

  deleteComment(id) {
    this.readArticleService.removeComment(id, this.slug).subscribe((status: Object) => { });
    this.readArticleService.getAllComments(this.slug).subscribe((status: Array<Object>) => {
      this.saveComments(status);
      window.location.reload();
      this.route.navigate([`New-Article/articles/${this.slug}`]);
    });
  }
  deleteArticle() {
    this.readArticleService.removeArticle(this.slug).subscribe((status: Object) => {
      console.log("Article Deleted")
      this.route.navigate([`Home`]);
    });
  }

  editArticle() {
    this.route.navigate(['Editor', this.slug]);
  }
  followUser() {
    if(!localStorage.getItem('Token')){
      this.callSignin();
    }
    this.readArticleService.follow(this.selected).subscribe((status) => { console.log(status);
       this.saveFollowing(status);
      })
  }
  favoriteArticle() {
    if(!localStorage.getItem('Token')){
      this.callSignin();
    }
    this.readArticleService.favorite(this.slug).subscribe((status) => { console.log(status);
      this.saveData(status); })
  }
  UnfollowUser() {
    this.readArticleService.Unfollow(this.selected).subscribe((status) => { console.log(status);
      this.saveFollowing(status);
      })
  }
  UnfavoriteArticle() {
    this.readArticleService.Unfavorite(this.slug).subscribe((status) => { console.log(status); this.saveData(status); })
  }
  saveFollowing(status){
    this.following=status.profile.following;
  }
}
