import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {CookieService} from 'ngx-cookie-service';
import { IUSer } from 'src/Iuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userdata:any;
  public ck;
  myuser : any;
  mydata;
  email = this.cookieservice.get("email");
  link;
  title;
  data;
  constructor(private apiservice:ApiService,private cookieservice:CookieService,private router:Router) { }
  
  UserForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    
  });

  ngOnInit() {
    
    this.ck=this.cookieservice.check("email");
    if(!this.ck){
      this.router.navigate(['/home']);
    }
    else{
      this.router.navigate(['/user']);
    }
    this.callservice();
    this.ck= this.cookieservice.check("email");
  }

  //usercall
  callservice(){
    this.apiservice.FindUser(this.email).subscribe(res =>  this.userdata = res);
    

  }

  search(){
    if(!this.UserForm.valid){
      console.log("Invalid entry");
      return;
    }
    this.apiservice.FindUser(this.UserForm.value)
    .subscribe(
       data => {
        if(data == null)
        {
          window.alert("user not found");
        } 
       if(data !=null){
       
        console.log("reach");
        this.userdata=data;
        // this.apiservice.FindUser(this.UserForm.value).subscribe((data) =>{this.userdata=data;console.log("dfghjkll")})
        console.log(data);
       } 
      },
      error => console.error(error)
      )
    // console.log(this.loginForm.value);
  }


  //delete user
  deleteuser()
  {
    alert("are you sure you want to delete this packages");
    this.apiservice.deleteuser((this.userdata.email).toString());
    console.log("have call karo");
    console.log("inside logout");
    this.cookieservice.set("email",null,-1);
    location.reload();
    
  
  }

  //update user
  update(user:IUSer){
    this.apiservice.putupdate(user).subscribe(res => res);
    alert('user updated!');
  }

  //datacontributions
  addcon(mydata){
    this.apiservice.mycon(mydata).subscribe(res => res);
    location.reload();
   
  }

}
