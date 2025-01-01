import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RootState } from 'storage/store';
import { WordDefinition } from 'storage/words/types';
import { PartOfSpeech, partsOfSpeech } from '../types/types';

export const useFilteredWords = (words: WordDefinition[] | undefined) => {
    const searchQuery = useSelector(
        (state: RootState) => state.words.currentWordSearchQuery,
    );
    const [partOfSpeechFilter, setPartOfSpeechFilter] = useState<
        PartOfSpeech[]
    >([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const partsOfSpeechesInUrl: PartOfSpeech[] = [];

        searchParams.forEach((_, key) => {
            if (partsOfSpeech.includes(key as PartOfSpeech)) {
                partsOfSpeechesInUrl.push(key as PartOfSpeech);
            }
        });

        setPartOfSpeechFilter(partsOfSpeechesInUrl);
    }, [searchParams]);

    const filteredWords = words
        ? words.filter(
              (word) =>
                  word.name.includes(searchQuery) &&
                  (!partOfSpeechFilter.length ||
                      partOfSpeechFilter.includes(
                          word.partOfSpeech as PartOfSpeech,
                      )),
          )
        : [];

    return filteredWords;
};
