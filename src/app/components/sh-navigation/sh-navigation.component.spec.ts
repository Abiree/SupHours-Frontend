import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShNavigationComponent } from './sh-navigation.component';

describe('ShNavigationComponent', () => {
  let component: ShNavigationComponent;
  let fixture: ComponentFixture<ShNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
