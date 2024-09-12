import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherService } from './services/weather.service';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WeatherComponent,
    MatTabGroup,
    MatTab,
    RouterLink,
    FooterComponent,
  ],
  providers: [WeatherService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'swissre';
}
