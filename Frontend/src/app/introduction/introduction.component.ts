import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-index',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {


  public ck;
  email = this.cookieservice.get("email");
  constructor(private cookieservice: CookieService,private router:Router) { }

  ngOnInit() {
    AOS.init();
    this.ck = this.cookieservice.check("email");
    if(this.ck){
      this.router.navigate(['/introduction']);
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

}
