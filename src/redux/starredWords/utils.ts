import { WordDefinition } from '../words/types';
import { wordsKey } from './constants';

export const loadWordsFromLocalStorage = () => {
    const itemsString = localStorage.getItem(wordsKey);

    if (!itemsString) {
        return [];
    }

    // зачем два раза типизировать WordDefinition[] ? 
    const wordsFromLocalStorage: WordDefinition[] = JSON.parse(
        itemsString,
    ) as WordDefinition[];

    return wordsFromLocalStorage;
};
