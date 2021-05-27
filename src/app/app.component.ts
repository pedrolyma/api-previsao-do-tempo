import { Component } from '@angular/core';
import * as moment from 'moment-timezone';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plweather';

  constructor() {
    moment,locale('pt-br');
  }
}
