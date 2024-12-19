import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StarredWords } from './types';
import { WordDefinition } from '../words/types';
import { loadWordsFromLocalStorage } from './utils';
import { wordsKey } from './constants';

const initialState: StarredWords = {
    words: loadWordsFromLocalStorage(),
};

const starredWordsSlice = createSlice({
    name: 'starredWords',
    initialState,
    reducers: {
        // попробуй объединить в один редьюсер и для сохранения и для удаления из localStorage
        saveWordToLocalStorage: (
            state,
            action: PayloadAction<WordDefinition>,
        ) => {
            const word = action.payload;

            // state.words - это массив, поэтому это условие всегда вернет true 
            if (state.words) {
                localStorage.setItem(
                    wordsKey,
                    JSON.stringify([...state.words, word]),
                );
            }

            state.words = loadWordsFromLocalStorage();
        },
        removeWordFromLocalStorage: (
            state,
            action: PayloadAction<WordDefinition>,
        ) => {
            const word = action.payload;

            // state.words - это массив, поэтому это условие всегда вернет true 
            if (state.words) {
                const newWords = state.words.filter(
                    // не сокращай настолько сильно, код должен оставаться читабельным 
                    (w) => w.name !== word.name,
                );
                localStorage.setItem(wordsKey, JSON.stringify(newWords));
            }

            state.words = loadWordsFromLocalStorage();
        },
        changeWordsInLocalStorage: (
            state,
            action: PayloadAction<WordDefinition[]>,
        ) => {
            state.words = action.payload;

            localStorage.setItem(wordsKey, JSON.stringify(action.payload));
        },
    },
});

export const {
    saveWordToLocalStorage,
    removeWordFromLocalStorage,
    changeWordsInLocalStorage,
} = starredWordsSlice.actions;

export default starredWordsSlice.reducer;
