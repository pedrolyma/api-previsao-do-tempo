import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './containers/home/home.page';
import { ReactiveFormsModule } from '@angular/forms';
import { homeReducer } from './state/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffectrs } from './state/home.effects';
import { ComponentsModule } from 'src/app/shared/components/loader/components.module';
import { UnitSelectorComponent } from './containers/unit-selector/unit-selector.component';

@NgModule({
  declarations: [HomePage, UnitSelectorComponent, CurrentWeatherComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffectrs]),
    ComponentsModule,
  ],

})
export class HomeModule { }
