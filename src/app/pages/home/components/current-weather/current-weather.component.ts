import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { CityWeather } from 'src/app/shared/models/weather.model';

// este component apenas recebe informacoes e envia ao html
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // sempre que o input receber nova informacao atualiza o html, muda o default
})
export class CurrentWeatherComponent {

  @Input() cityWeather: CityWeather;
  @Input() isFavorite: boolean;
  @Output() toogleBookmark = new EventEmitter();
  // constructor() { }

  // ngOnInit(): void {
  // }

  // retorna uma cidade e renderiza no html p/ nao dar subscribe
  get cityName(): string {
    return `${this.cityWeather.city.name}, ${this.cityWeather.city.country}`
  }

  onToggleBookmark() {
    this.toogleBookmark.emit();
  }

}
