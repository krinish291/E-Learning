
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public ck;
  
  constructor(private cookieservice: CookieService,private router:Router) { }
  email = this.cookieservice.get("email");
  ngOnInit() {
    AOS.init();
    window.scrollTo(0,0);
    this.ck = this.cookieservice.check("email");
    if(this.ck){
      
    }
    else{
      this.router.navigate(['/home']);
    }
    
  }
  currentSection = 'introduction';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView({behavior : 'smooth'} );
    
  }
  logout(){
    console.log("inside logout");
    this.cookieservice.set("email",null,-1);
    location.reload();
  }

}
