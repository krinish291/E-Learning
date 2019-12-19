import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { CookieService } from 'ngx-cookie-service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private model:any;
  private result:any[]
  userdata;
  feedbackdata;
  con;
  ck;
  constructor(private apiservice:ApiService,private cookieservice:CookieService,private router:Router) { }

  ngOnInit() {
    this.ck=this.cookieservice.check("email");
    
    if(!this.ck){
      this.router.navigate(['/adminlogin']);
    }
    else{
      console.log(this.cookieservice.get("email"));
      if(this.cookieservice.get("email") == "admin"){
      this.router.navigate(['/admin']);
      }
      else{
        this.router.navigate(['/home']);
      }
    }
  }
  getdetails()
  {
    console.log("reach");
    this.apiservice.userdisplay().subscribe((data) =>{this.userdata=data;console.log("dfghjkll")})
  }
  deleteuser(data)
  {
    alert("are you sure you want to delete this packages");
    this.apiservice.deleteuser((this.userdata[data].email).toString());
    console.log("have call karo");
    location.reload();
    this.getdetails();
  
  }

  getfeedback()
  {
    console.log("reach");
    this.apiservice.feedbackdisplay().subscribe((data) =>{this.feedbackdata=data;console.log("dfghjkll")})
  }

  showcon(){
    this.apiservice.condisplay().subscribe((data) =>{this.con=data;console.log("dfghjkll")})
  }

  logout(){
    console.log("inside logout");
    this.cookieservice.set("email",null,-1);
    this.router.navigate(['/adminlogin']);
  }
}
