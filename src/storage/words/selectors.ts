import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectCurrentSearchQuery = createSelector(
    (state: RootState) => state.words,
    (words) => words.currentWordSearchQuery,
);

export const selectLoadingWords = createSelector(
    (state: RootState) => state.words,
    (words) => ({
        isError: words.isError,
        isLoading: words.isLoading,
        words: words.words,
    }),
);
