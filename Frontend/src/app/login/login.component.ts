import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private apiservice:ApiService,private cookieservice: CookieService) { }

  ngOnInit() {
  }

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,Validators.required)
  });

  login(){
    if(!this.loginForm.valid){
      console.log("Invalid entry");
      return;
    }
    this.apiservice.loginUser(this.loginForm.value)
    .subscribe(
      data => {
        if(data == null)
        {
          window.alert("user not found");
          this.router.navigate(['/login']);  
        } 
       if(data !=null){
        this.cookieservice.set("email",this.loginForm.get("email").value)
        this.router.navigate(['/home']);
        console.log(data);
       } 
      },
      error => console.error(error)
      )
    // console.log(this.loginForm.value);
  }

}
