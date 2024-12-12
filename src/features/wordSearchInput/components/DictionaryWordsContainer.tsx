import { WordDefinition } from '../../../redux/words/types';
import WordListItem from './WordListItem';
import '../styles/dictionaryWordsContainer.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const DictionaryWordsContainer = () => {
    const mockWordDefinition: WordDefinition = {
        name: 'Freedom',
        partOfSpeech: 'adjective',
        definitions: [
            'the quality or state of being free: such as alsdkfjlaksdj lksj lfkja slkdjfalksj alskdfj laksj dl',
        ],
        pronunciations: ['ke:Adsf`Exam1s'],
    };

    const { searchQuerry, words } = useSelector((state: RootState) => {
        return {
            searchQuerry: state.words.currentWordSearchQuery,
            words: state.words.words,
        };
    });

    const [isSearchQueryEmpty, setIsSearchQueryEmpty] = useState(true);

    useEffect(() => {
        if (searchQuerry === '') {
            setIsSearchQueryEmpty(true);
        } else {
            setIsSearchQueryEmpty(false);
        }
    }, [searchQuerry]);

    return (
        <div className="outer-container">
            {isSearchQueryEmpty ? (
                <div className="search-query-empty-label">
                    <h1>Search query is empty</h1>
                </div>
            ) : (
                <ul className="words-container">
                    <li>
                        <WordListItem wordListItemInfo={mockWordDefinition} />
                    </li>
                    <li>
                        <WordListItem wordListItemInfo={mockWordDefinition} />
                    </li>
                    <li>
                        <WordListItem wordListItemInfo={mockWordDefinition} />
                    </li>
                    <li>
                        <WordListItem wordListItemInfo={mockWordDefinition} />
                    </li>
                </ul>
            )}
        </div>
    );
};

export default DictionaryWordsContainer;
