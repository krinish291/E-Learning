import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImDataComponent } from './im-data.component';

describe('ImDataComponent', () => {
  let component: ImDataComponent;
  let fixture: ComponentFixture<ImDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
