import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './containers/bookmarks/bookmarks.page';
import { ReactiveFormsModule } from '@angular/forms';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { BookmarksEffects } from './state/bookmarks.effects';
import { ComponentsModule } from 'src/app/shared/components/loader/components.module';

@NgModule({
  declarations: [BookmarksPage],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature('bookmarks', bookmarkReducer),
    EffectsModule.forFeature([BookmarksEffects]),
    ComponentsModule,
  ]
})
export class BookmarksModule { }
