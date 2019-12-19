import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-im-data',
  templateUrl: './im-data.component.html',
  styleUrls: ['./im-data.component.css']
})
export class ImDataComponent implements OnInit {

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
