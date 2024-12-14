import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './words/wordsSlice';
import savedWordsReducer from './starredWords/starredWordsSlice';

export const store = configureStore({
    reducer: {
        words: wordReducer,
        savedWords: savedWordsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
