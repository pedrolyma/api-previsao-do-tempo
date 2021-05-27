import { Router } from '@angular/router';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HomeModule } from './pages/home/home.module';
import { BookmarksModule } from './pages/bookmarks/bookmarks.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DetailedWeatherComponent } from './shared/components/detailed-weather/detailed-weather.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './shared/state/app.reducer';
import { CustomRouterSerializer } from './shared/state/router/router.reducer';
import { CitiesTypeaheadComponent } from './shared/components/cities-typeahead/cities-typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailedWeatherComponent,
    CitiesTypeaheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BookmarksModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ serializer: CustomRouterSerializer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
