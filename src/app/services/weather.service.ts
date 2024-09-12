import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import {IWeatherData} from "../components/weather/weather.interface";


@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = environment.openWeatherApiKey;

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<IWeatherData> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric');
    return this.http.get<IWeatherData>(this.apiUrl, { params });
  }
}
