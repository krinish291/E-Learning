import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsStartComponent } from './lets-start.component';

describe('LetsStartComponent', () => {
  let component: LetsStartComponent;
  let fixture: ComponentFixture<LetsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
