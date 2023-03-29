import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShTimeTableComponent } from './sh-time-table.component';

describe('ShTimeTableComponent', () => {
  let component: ShTimeTableComponent;
  let fixture: ComponentFixture<ShTimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShTimeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
