import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StarredWords } from './types';
import { WordDefinition } from '../words/types';
import { loadWordsFromLocalStorage } from './utils';

const initialState: StarredWords = {
    words: loadWordsFromLocalStorage(),
};

const starredWordsSlice = createSlice({
    name: 'starredWords',
    initialState,
    reducers: {
        saveWordToLocalStorage: (
            state,
            action: PayloadAction<WordDefinition>,
        ) => {
            const word = action.payload;
            localStorage.setItem(word.name, JSON.stringify(word));

            state.words = loadWordsFromLocalStorage();
        },
        removeWordFromLocalStorage: (
            state,
            action: PayloadAction<WordDefinition>,
        ) => {
            const word = action.payload;
            localStorage.removeItem(word.name);

            state.words = loadWordsFromLocalStorage();
        },
    },
});

export const { saveWordToLocalStorage, removeWordFromLocalStorage } =
    starredWordsSlice.actions;

export default starredWordsSlice.reducer;
