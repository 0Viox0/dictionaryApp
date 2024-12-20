import { WordDefinition } from '../words/types';
import { LOCAL_STORAGE_KEY } from './constants';

export const loadWordsFromLocalStorage = () => {
    const itemsString = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!itemsString) {
        return [];
    }

    // зачем два раза типизировать WordDefinition[] ?
    const wordsFromLocalStorage: WordDefinition[] = JSON.parse(
        itemsString,
    ) as WordDefinition[];

    return wordsFromLocalStorage;
};
