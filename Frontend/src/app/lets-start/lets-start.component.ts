import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lets-start',
  templateUrl: './lets-start.component.html',
  styleUrls: ['./lets-start.component.css']
})
export class LetsStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
