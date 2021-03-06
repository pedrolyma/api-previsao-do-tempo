import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DetailsPage } from './containers/details/details.page';
import { DetailsGuard } from './services/details.guard';
import { DailyWeatherComponent } from './components/daily/daily-weather/daily-weather.component';
import { detailsReducer } from './state/details.reducer';
import { DetailsEffects } from './state/details.effects';
import { ComponentsModule } from 'src/app/shared/components/loader/components.module';

@NgModule({
  declarations: [
    DetailsPage,
    DailyWeatherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DetailsPage, canActivate: [DetailsGuard] },
    ]),
    StoreModule.forFeature('details', detailsReducer),
    EffectsModule.forFeature([DetailsEffects]),
    ComponentsModule,
  ],
  providers: [ DetailsGuard ],
})
export class DetailsModule { }
