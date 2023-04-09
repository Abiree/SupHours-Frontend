import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShCourseSidebarDetailComponent } from './sh-course-sidebar-detail.component';

describe('ShCourseSidebarDetailComponent', () => {
  let component: ShCourseSidebarDetailComponent;
  let fixture: ComponentFixture<ShCourseSidebarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShCourseSidebarDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShCourseSidebarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
