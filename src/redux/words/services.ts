import { API_KEY, wordsBaseUrl } from '../../constants';
import { WordDefinition } from './types';

type FetchedWord = {
    meta: {
        id: number;
        'app-shortdef': {
            fl: string;
        };
    };
    shortdef: string[];
    hwi: {
        prs: string[];
    };
};

export const fetchWordsData = async (query: string) => {
    try {
        const result = await fetch(`${wordsBaseUrl}${query}?key=${API_KEY}`);

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
        return undefined;
    }
};
