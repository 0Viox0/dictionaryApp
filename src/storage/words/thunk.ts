import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWordsData } from './services';

export const fetchWordsAsync = createAsyncThunk(
    '/words/fetchWords',
    async (query: string) => {
        return await fetchWordsData(query);
    },
);
