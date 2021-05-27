import { Observable, Subscriber } from 'rxjs';
import { Component, OnInit, Optional, Self } from '@angular/core';
import { CityTypeaheadItem } from '../../models/city-typeahead-item.model';
import { switchMap } from 'rxjs/operators';
import { CitiesService } from '../../services/cities.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-cities-typeahead',
  templateUrl: './cities-typeahead.component.html',
  styleUrls: ['./cities-typeahead.component.css']
})
export class CitiesTypeaheadComponent implements OnInit, ControlValueAccessor {

  dataSource$: Observable<CityTypeaheadItem[]>;
  search: string;
  private onChange: (value: CityTypeaheadItem) => void;
  private onTouched: () => void;
  disabled: boolean;

  constructor(private citiesService: CitiesService,
              @Optional() @Self() public control: NgControl) {
                control.valueAccessor = this;
               }

  ngOnInit() {
    this.dataSource$ = new Observable(
      (subscriber: Subscriber<string>) => subscriber.next(this.search)
    )
    // whitchMap - busca letra por letra a cada digito p o
    .pipe(switchMap((query: string) => this.citiesService.getCities(query)));
  }

  // vindo do html
  onSelected(match: TypeaheadMatch) {
    this.onTouched();
    this.onChange(match.item);
  }

  registerOnChange(fn: (value: CityTypeaheadItem) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void ) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  writeValue() {

  }
}
