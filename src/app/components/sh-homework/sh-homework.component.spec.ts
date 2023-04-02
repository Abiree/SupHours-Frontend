import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShHomeworkComponent } from './sh-homework.component';

describe('ShHomeworkComponent', () => {
  let component: ShHomeworkComponent;
  let fixture: ComponentFixture<ShHomeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShHomeworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
