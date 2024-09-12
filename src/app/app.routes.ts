import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
  { path: 'daily', component: WeatherComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
