import '../../styles/dictionaryWordsContainer.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/store';
import { fetchWordsAsync } from '../../../../redux/words/thunk';
import { text } from '../../../../text/text';
import WordListItem from '../../../../components/items/components/WordListItem';
import { InfoMessage } from '../../../../components';

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
                    {[...words].map((word) => (
                        <li key={word.name}>
                            <WordListItem wordListItemInfo={word} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DictionaryWordsContainer;
