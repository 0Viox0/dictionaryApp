import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WordsState } from './types';
import { fetchWordsAsync } from './thunk';

const initialState: WordsState = {
    currentWordSearchQuery: '',
    isLoading: false,
    pageSize: 10,
    currentIndex: 0,
    words: undefined,
};

const wordSlice = createSlice({
    name: 'words',
    initialState: initialState,
    reducers: {
        changeInputQuery: (state, action: PayloadAction<string>) => {
            state.currentWordSearchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWordsAsync.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchWordsAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.words = action.payload;
        });
    },
});

export const { changeInputQuery } = wordSlice.actions;
export default wordSlice.reducer;
