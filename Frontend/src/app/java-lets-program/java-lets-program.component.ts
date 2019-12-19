import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-java-lets-program',
  templateUrl: './java-lets-program.component.html',
  styleUrls: ['./java-lets-program.component.css']
})
export class JavaLetsProgramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
    window.scrollTo(0,0);
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
