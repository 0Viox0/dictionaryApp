import { WordDefinition } from '../words/types';

export const loadWordsFromLocalStorage = () => {
    const wordsFromLocalStorage: WordDefinition[] = [];

    for (let i = 0; i < localStorage.length; i++) {
        try {
            const key = localStorage.key(i);
            if (!key) continue;

            const item = localStorage.getItem(key);
            if (!item) continue;

            const parsedItem = JSON.parse(item) as WordDefinition;
            wordsFromLocalStorage.push(parsedItem);
        } catch {
            continue;
        }
    }

    return wordsFromLocalStorage;
};
