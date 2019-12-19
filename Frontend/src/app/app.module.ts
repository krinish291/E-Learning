import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.Component';
import { LetsStartComponent } from './lets-start/lets-start.component';
import { QuizComponent } from './quiz/quiz.component';
import { ImDataComponent } from './im-data/im-data.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateComponent } from './update/update.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JavaComponent } from './java/java.component';
import { JavaLetsProgramComponent } from './java-lets-program/java-lets-program.component';

const appRoutes: Routes = [
 { path:'introduction', component : IntroductionComponent},
 { path:'lets-start', component : LetsStartComponent},
 { path:'im-data', component : ImDataComponent},
 { path:'ComingSoon', component :NotFoundComponent },
 { path:'quiz', component : QuizComponent},
 { path:'login', component :LoginComponent },
 { path:'signup', component : SignupComponent},
 { path:'admin', component : AdminComponent},
 { path:'user', component : UserComponent},
 { path:'home', component : HomeComponent},
 { path:'update/:email', component : UpdateComponent},
 { path:'adminlogin', component : AdminloginComponent},
 { path:'about', component : AboutComponent},
 { path:'java', component : JavaComponent},
 { path:'java-lets-program', component : JavaLetsProgramComponent},
  
 { path:'', component : HomeComponent},

 { path:'**', component : HomeComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroductionComponent,
    LetsStartComponent,
    QuizComponent,
    ImDataComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    UserComponent,
    FooterComponent,
    UpdateComponent,
    AdminloginComponent,
    AboutComponent,
    NavbarComponent,
    JavaComponent,
    JavaLetsProgramComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule, 
    


  ],
  providers: [ApiService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
