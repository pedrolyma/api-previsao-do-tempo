import { Component, OnInit, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedWeatherComponent implements OnInit {

  @Input() weather: Weather;

  constructor() { }

  ngOnInit(): void {
  }

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`
  }


}
