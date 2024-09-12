import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirection',
  standalone: true,
})
export class WindDirectionPipe implements PipeTransform {
  transform(degrees: number): string {
    let directions: string[] = [
      'N',
      'NNE',
      'NE',
      'ENE',
      'E',
      'ESE',
      'SE',
      'SSE',
      'S',
      'SSW',
      'SW',
      'WSW',
      'W',
      'WNW',
      'NW',
      'NNW',
    ];

    const section: number = Math.floor(degrees / 22.5 + 0.5);

    return directions[section % 16];
  }
}
