import { API_KEY, BASE_URL } from '../../shared/constants';
import { FetchedWord, WordDefinition } from './types';

export const fetchWordsData = async (query: string) => {
    try {
        const response = await fetch(`${BASE_URL}${query}?key=${API_KEY}`);

        if (!response.ok) {
            throw new Error(`failed to fetch data from ${BASE_URL}`);
        }

        const json = await response.json();

        const wordsArray: WordDefinition[] = json.map(
            (fetchedWord: FetchedWord) => ({
                name: fetchedWord.meta.id,
                partOfSpeech: fetchedWord.meta['app-shortdef'].fl,
                definitions: fetchedWord.shortdef,
                pronunciations: fetchedWord.hwi.prs,
            }),
        );

        return wordsArray;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message, error);
        } else {
            console.log('An unknown error has occured', error);
        }

        return undefined;
    }
};
