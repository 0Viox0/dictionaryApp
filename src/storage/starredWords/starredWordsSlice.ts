import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StarredWords } from './types';
import { WordDefinition } from '../words/types';
import { loadWordsFromLocalStorage } from './utils';
import { LOCAL_STORAGE_KEY } from './constants';

const initialState: StarredWords = {
    words: loadWordsFromLocalStorage(),
};

const starredWordsSlice = createSlice({
    name: 'starredWords',
    initialState,
    reducers: {
        toggleWordInLocalStorage: (
            state,
            action: PayloadAction<WordDefinition>,
        ) => {
            const wordFromPayload = action.payload;

            const wordIndex = state.words.findIndex(
                (word) => word.name === wordFromPayload.name,
            );

            if (wordIndex !== -1) {
                state.words = state.words.filter(
                    (word) => word.name !== wordFromPayload.name,
                );
            } else {
                state.words.push(wordFromPayload);
            }

            localStorage.setItem(
                LOCAL_STORAGE_KEY,
                JSON.stringify(state.words),
            );
        },
        changeWordsInLocalStorage: (
            state,
            action: PayloadAction<WordDefinition[]>,
        ) => {
            state.words = action.payload;

            localStorage.setItem(
                LOCAL_STORAGE_KEY,
                JSON.stringify(action.payload),
            );
        },
    },
});

export const { toggleWordInLocalStorage, changeWordsInLocalStorage } =
    starredWordsSlice.actions;

export default starredWordsSlice.reducer;
