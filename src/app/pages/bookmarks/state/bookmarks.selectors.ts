import { BookmarksState } from './bookmarks.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectBookmarksState = createFeatureSelector('bookmarks');
export const selectBookmarksList = createSelector(
  selectBookmarksState,
  (bookmarksState: BookmarksState) => bookmarksState.list,
);
