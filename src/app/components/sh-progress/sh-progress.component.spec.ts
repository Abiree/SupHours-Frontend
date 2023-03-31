import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShProgressComponent } from './sh-progress.component';

describe('ShProgressComponent', () => {
  let component: ShProgressComponent;
  let fixture: ComponentFixture<ShProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
