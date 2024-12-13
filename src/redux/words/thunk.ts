import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWordsData } from './services';
import { WordDefinition } from './types';

export const fetchWordsAsync = createAsyncThunk(
    '/words/fetchWords',
    async (query: string) => {
        const mockWordDefinitions: WordDefinition[] = [
            {
                name: 'Freedom',
                partOfSpeech: 'adjective',
                definitions: [
                    'the quality or state of being free: such as alsdkfjlaksdj lksj lfkja slkdjfalksj alskdfj laksj dl',
                    'another definition in some sort',
                    'and different but still valid and can be used in the code',
                ],
                pronunciations: [{ ipa: 'ke:Adsf`Exam1s' }],
            },
            {
                name: 'Free',
                partOfSpeech: 'adjective',
                definitions: [
                    'no costing or charging anything',
                    'at this point im just trying to figure somthign out',
                    'and now again. the black hole is a body with infinite mass',
                ],
                pronunciations: ['ke:Adsf`Exam1s', 'Free:ee'],
            },
            {
                name: 'Frequency',
                partOfSpeech: 'noun',
                definitions: [
                    'the fact or condition of occurring frequently',
                    'look at Frequent',
                ],
                pronunciations: ['ke:Adsf`Exam1s'],
            },
        ];

        return await fetchWordsData(query);
        // return mockWordDefinitions;
    },
);
