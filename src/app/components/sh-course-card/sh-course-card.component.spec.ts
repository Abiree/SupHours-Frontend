import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShCourseCardComponent } from './sh-course-card.component';

describe('ShCourseCardComponent', () => {
  let component: ShCourseCardComponent;
  let fixture: ComponentFixture<ShCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShCourseCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
