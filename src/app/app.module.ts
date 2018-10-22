import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GlobalFeedComponent } from './global-feed/global-feed.component';
import {GlobalFeedService} from './services/global-feed.service'
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { Http, HttpModule } from '@angular/http';
import { NavUserComponent } from './nav-user/nav-user.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ReadArticleComponent } from './read-article/read-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ShowtagsComponent } from './showtags/showtags.component';
import { YourFeedComponent } from './your-feed/your-feed.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PageComponent } from './page/page.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    GlobalFeedComponent,
    SignUpComponent,
    LoginComponent,
    NavUserComponent,
    SettingsComponent,
    HomeUserComponent,
    NewArticleComponent,
    ReadArticleComponent,
    EditArticleComponent,
    ShowtagsComponent,
    YourFeedComponent,
    UserProfileComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [GlobalFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
