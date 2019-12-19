import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    firstname:new FormControl(null,Validators.required),
    lastname:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,Validators.required),
    cpassword:new FormControl(null,Validators.required),
    phone:new FormControl(null,Validators.required),
 }); 
  constructor(private router:Router,private apiservice: ApiService) { }

  ngOnInit() {
  }

  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpassword.value)){
      console.log("Invalid Form");
      window.alert("you should enter a data properly")
      return;
    }
    this.apiservice.registerUser(this.registerForm.value)
    .subscribe(
      data => {
        console.log(data);  
        this.router.navigate(['/login']);
      },
      error => console.error(error)
      )
    }
}
