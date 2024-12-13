import '../../styles/dictionaryWordsContainer.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { fetchWordsAsync } from '../../../../redux/words/thunk';
import WordListItem from '../WordListItem';
import { text } from '../../../../text/text';
import InfoMessage from '../text/InfoMessage';

const DictionaryWordsContainer = () => {
    const searchQuerry = useSelector(
        (state: RootState) => state.words.currentWordSearchQuery,
    );
    const words = useSelector((state: RootState) => state.words.words);
    const isLoading = useSelector((state: RootState) => state.words.isLoading);
    const dispatch = useDispatch<AppDispatch>();

    const [isSearchQueryEmpty, setIsSearchQueryEmpty] = useState(true);

    useEffect(() => {
        if (searchQuerry === '') {
            setIsSearchQueryEmpty(true);
        } else {
            setIsSearchQueryEmpty(false);
            dispatch(fetchWordsAsync(searchQuerry));
        }
    }, [searchQuerry, dispatch]);

    return (
        <div className="outer-container">
            {isSearchQueryEmpty ? (
                <InfoMessage text={text.searchQueryEmpty} />
            ) : isLoading ? (
                <InfoMessage text={text.loadingMessage} />
            ) : words === undefined || words.length === 0 ? (
                <InfoMessage text={text.nothingFound} />
            ) : (
                <ul className="words-container">
                    {words
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((word) => (
                            <li>
                                <WordListItem
                                    wordListItemInfo={word}
                                    key={word.name}
                                />
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default DictionaryWordsContainer;
