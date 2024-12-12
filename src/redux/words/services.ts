import { wordSearchBaseUrl } from '../../constants';
import { WordDefinition } from './types';

export const fetchWordsData = async (query: string, max: number) => {
    try {
        // const result = await fetch(`${wordsBaseUrl}${query}?key=${API_KEY}`);
        const result = await fetch(
            `${wordSearchBaseUrl}?sp=${query}*&max=${max}`,
        );
        const json = await result.json();

        const wordsArray: WordDefinition[] = json.map((fetchedWord: any) => ({
            name: fetchedWord.word,
            partOfSpeech: 'noun',
            definitions: 'this is some mock short definition',
            pronunciations: 'p:exAAmple',
            // name: fetchedWord.meta.id,
            // partOfSpeech: fetchedWord.meta['app-shortdef'].fl,
            // definitions: fetchedWord.shortdef,
            // pronunciations: fetchedWord.hwi.prs,
        }));

        console.log(wordsArray);

        return wordsArray;
    } catch (err) {
        console.log(err);
    }
};
