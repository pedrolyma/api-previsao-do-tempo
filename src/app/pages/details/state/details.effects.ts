import { City } from './../../../shared/models/weather.model';
import { selectRouterQueryParams } from './../../../shared/state/router/router.selectors';
import { WeatherService } from './../../../shared/services/weather.service';
import { Actions } from '@ngrx/effects';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { loadCurrentWeather } from './../../home/state/home.actions';
import { Injectable } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/shared/state/app.reducer';
import * as fromDetailsActions from './details.actions';
import { combineLatest } from 'rxjs';
import { catchError, map, withLatestFrom, mergeMap } from 'rxjs/operators';
import { Params } from '@angular/router';
import * as fromRouterSelectors from '../../../shared/state/router/router.selectors';

@Injectable()
export class DatailsEffects {

  loadCurrentWeather$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromDetailsActions.loadWeatherDetails),
      withLatestFrom(this.store.pipe(select(fromRouterSelectors.selectRouterQueryParams))),
      mergeMap(([, queryParams]: [any, Params]) =>
        combineLatest([
          this.weatherService.getCityWeatherByCoord(queryParams.lat, queryParams.lon),
          this.weatherService.getWeatherDetails(queryParams.lat, queryParams.lon),
        ])
      ),
      catchError((err, caught$) => {
        this.store.dispatch(fromDetailsActions.loadWeatherDetailsFailed());
        return caught$;
      }),
      map(([current, daily]) => {
        const entity = daily;
        entity.city = {...current.city, timeZone: daily.city.timeZone};
        return fromDetailsActions.loadWeatherDetailsSuccess({ entity });
      }),
    )
  );

  constructor(private actions$: Actions,
              private store: Store<AppState>,
              private weatherService: WeatherService) {

              }
}
