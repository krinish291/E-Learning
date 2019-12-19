import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

    email;
    password;
    ck;
  constructor(private apiservice:ApiService,private cookieservice: CookieService,private router:Router ) { }
  

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required]),
    password:new FormControl(null,Validators.required)
  });

  ngOnInit() {
    
  }

  

  
  validation(){
    console.log(this.loginForm.get("email").value);
    if(this.loginForm.get("email").value=="admin" && this.loginForm.get("password").value=="admin"){
      this.router.navigate(['/admin']);
      this.cookieservice.set("email",this.loginForm.get("email").value)
      //this.email = this.cookieservice.get("email");
    }
    else{
      this.router.navigate(['/adminlogin']);
    }

  }

}
