import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherWeeklyComponent } from './components/weather-weekly/weather-weekly.component';
import { NgModule } from '@angular/core';
import {HomePageComponent} from "./components/home-page/home-page.component";

export const routes: Routes = [
  { path: 'daily', component: WeatherComponent },
  { path: 'weekly', component: WeatherWeeklyComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
