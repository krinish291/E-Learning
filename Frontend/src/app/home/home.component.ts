import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ck;
  feedbackdata;

  constructor(private router:Router,private apiservice: ApiService,private cookieservice:CookieService) { }
  email = this.cookieservice.get("email");

  ngOnInit() {
   this.ck= this.cookieservice.check("email");
   this.getfeedback();
   window.scrollTo(0,0);
  }

  logout(){
    console.log("inside logout");
    this.cookieservice.set("email",null,-1);
    location.reload();
  }

  FeedBackForm:FormGroup = new FormGroup({
    name:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.email,Validators.required]),
    comments:new FormControl(null,Validators.required),
    
    
 }); 

  feedback(){
    if(!this.FeedBackForm.valid){
      console.log("Invalid Form");
      window.alert("you should enter a data properly")
      return;
    }
    this.apiservice.feedback(this.FeedBackForm.value)
    .subscribe(
      data => {
        console.log(data);  
        window.alert("Feedback successfully Added");
        location.reload();
        this.router.navigate(['/home']);
      },
      error => console.error(error)
      )
    }

    getfeedback()
    {
      console.log("reach");
      this.apiservice.feedbackdisplay().subscribe((data) =>{this.feedbackdata=data;console.log("dfghjkll")})
    }
    currentSection = 'introduction';

    onSectionChange(sectionId: string) {
      this.currentSection = sectionId;
    }
  
    scrollTo(section) {
      document.querySelector('#' + section)
      .scrollIntoView({behavior : 'smooth'} );
      
    }

}
