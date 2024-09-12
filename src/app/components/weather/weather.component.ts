import { Component, signal } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { DatePipe, DecimalPipe, NgIf } from '@angular/common';
import { IWeatherData } from './weather.interface';
import { MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { InfoCardComponent } from '../info-card/info-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { WindDirectionPipe } from '../../wind-direction.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    DecimalPipe,
    DatePipe,
    MatFabButton,
    MatMiniFabButton,
    InfoCardComponent,
    MatProgressSpinnerModule,
    WindDirectionPipe,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weatherData?: IWeatherData;
  errorMessage = '';
  isLoading = false;
  protected readonly value = signal('');

  constructor(private weatherService: WeatherService) {}

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  getLocalTime(timestamp: number, timezoneOffset: number): string {
    const localTime = new Date((timestamp + timezoneOffset - 7200) * 1000);

    return localTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  getWeatherIconUrl(iconCode: string) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

  searchWeather() {
    const city = this.value();

    if (!city) {
      this.errorMessage = 'Please enter a city name.';
      this.weatherData = undefined;
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.weatherData = undefined;

    this.weatherService.getWeatherData(city).subscribe({
      next: (result) => {
        this.weatherData = result;
        console.log(result)
        this.isLoading = false;
      },
      error: (error) => {
        console.error('[!] weather.component ->', error);
        this.errorMessage = 'City not found. Please try again.';
        this.isLoading = false;
      },
    });
  }
}
