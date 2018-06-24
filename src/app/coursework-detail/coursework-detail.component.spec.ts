import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseworkDetailComponent } from './coursework-detail.component';

describe('CourseworkDetailComponent', () => {
  let component: CourseworkDetailComponent;
  let fixture: ComponentFixture<CourseworkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseworkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseworkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
