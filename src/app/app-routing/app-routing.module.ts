import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from '../home/home.component';
import {RouterModule,Routes} from '@angular/router';
import {GlobalFeedComponent} from '../global-feed/global-feed.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import {SettingsComponent} from '../settings/settings.component';
import { HomeUserComponent } from '../home-user/home-user.component';
import { NewArticleComponent } from '../new-article/new-article.component';
import {EditArticleComponent} from '../edit-article/edit-article.component';
import { ReadArticleComponent } from '../read-article/read-article.component';
import {YourFeedComponent} from '../your-feed/your-feed.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';

const routes:Routes = [
  { path: '', redirectTo:'home/global-feed',pathMatch:'full'},
  { path:'home',component: HomeComponent, children:[
  { path:'global-feed',component:GlobalFeedComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'settings',component:SettingsComponent},
  {path:'home-user',component:HomeUserComponent,children:[
    {
      path:'global-feed',component:GlobalFeedComponent
    },
    {path:'your-feed',component:YourFeedComponent}
  ]
},
{path:'new-article',component:NewArticleComponent},
{path:'edit-article',component:EditArticleComponent},
{path:'articles/:slug',component:ReadArticleComponent},
{path:'editor/:slug',component:EditArticleComponent},
 {path:'User-Profile/:username',component:UserProfileComponent}
];


@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports:[RouterModule],
 
})

export class AppRoutingModule { }
