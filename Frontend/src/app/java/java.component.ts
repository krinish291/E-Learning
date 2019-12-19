import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  constructor(private cookieservice:CookieService) { }
ck;
  ngOnInit() {

    AOS.init();
    window.scrollTo(0,0);
    this.ck= this.cookieservice.check("email");
  }
    scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView({behavior : 'smooth'} );
    
  }
  currentSection = 'introduction';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }



}