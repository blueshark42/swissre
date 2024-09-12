import { Component } from '@angular/core';
import { WeatherService} from '../../services/weather.service';
import {FormsModule} from "@angular/forms";
import {DatePipe, DecimalPipe, NgIf} from "@angular/common";
import {IWeatherData} from "./weather.interface";
import {MatFabButton, MatMiniFabButton} from "@angular/material/button";
import {InfoCardComponent} from "../info-card/info-card.component";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {WindDirectionPipe} from "../../wind-direction.pipe";

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
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  city = '';
  weatherData?: IWeatherData;
  errorMessage = '';
  isLoading = false;

  constructor(private weatherService: WeatherService) {}

  getWeatherIconUrl(iconCode: string) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }

  searchWeather() {
    if (!this.city) {
      this.errorMessage = 'Please enter a city name.';
      this.weatherData = undefined;
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.weatherData = undefined;

    this.weatherService.getWeatherData(this.city).subscribe({
      next: (result) => {
        this.weatherData = result;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('[!] weather.component ->', error);
        this.errorMessage = 'City not found. Please try again.';
        this.isLoading = false;
      },
    });
  }

  protected readonly JSON = JSON;
}
