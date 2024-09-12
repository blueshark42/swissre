import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWeeklyComponent } from './weather-weekly.component';

describe('WeatherWeeklyComponent', () => {
  let component: WeatherWeeklyComponent;
  let fixture: ComponentFixture<WeatherWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherWeeklyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
