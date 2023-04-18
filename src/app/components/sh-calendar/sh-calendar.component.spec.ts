import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShCalendarComponent } from './sh-calendar.component';

describe('ShCalendarComponent', () => {
  let component: ShCalendarComponent;
  let fixture: ComponentFixture<ShCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
