import { API_KEY, BASE_URL } from '../../shared/constants';
import { FetchedWord, WordDefinition } from './types';

export const fetchWordsData = async (query: string) => {
    try {
        const result = await fetch(`${BASE_URL}${query}?key=${API_KEY}`);

        const json = await result.json();

        const wordsArray: WordDefinition[] = json.map(
            (fetchedWord: FetchedWord) => ({
                name: fetchedWord.meta.id,
                partOfSpeech: fetchedWord.meta['app-shortdef'].fl,
                definitions: fetchedWord.shortdef,
                pronunciations: fetchedWord.hwi.prs,
            }),
        );

        return wordsArray;
    } catch {
        // не лучшее решение, нужно обрабатывать ошибки
        return undefined;
    }
};
