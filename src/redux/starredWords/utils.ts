import { WordDefinition } from '../words/types';
import { LOCAL_STORAGE_KEY } from './constants';

export const loadWordsFromLocalStorage = () => {
    const itemsString = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!itemsString) {
        return [];
    }

    const wordsFromLocalStorage: WordDefinition[] = JSON.parse(itemsString);

    return wordsFromLocalStorage;
};
