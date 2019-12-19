import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaLetsProgramComponent } from './java-lets-program.component';

describe('JavaLetsProgramComponent', () => {
  let component: JavaLetsProgramComponent;
  let fixture: ComponentFixture<JavaLetsProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaLetsProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaLetsProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
