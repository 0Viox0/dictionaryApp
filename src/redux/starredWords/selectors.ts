import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectStarredWords = createSelector(
    (state: RootState) => state.savedWords.words,
    (words) => words,
);
