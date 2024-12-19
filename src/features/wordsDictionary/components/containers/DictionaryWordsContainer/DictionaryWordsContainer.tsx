import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../redux/store';
import { fetchWordsAsync } from '../../../../../redux/words/thunk';
import { InfoMessage, WordListItem } from '../../../../../components';
import { text } from '../../../../../shared/text';

import './DictionaryWordsContainer.scss';

export const DictionaryWordsContainer = () => {
    // вместо трех useSelector можно использовать один (+ лучше использовать селектор созданный через createSelector)
    const searchQuerry = useSelector(
        (state: RootState) => state.words.currentWordSearchQuery,
    );
    const words = useSelector((state: RootState) => state.words.words);
    const isLoading = useSelector((state: RootState) => state.words.isLoading);
    const dispatch = useDispatch<AppDispatch>();

    const [isSearchQueryEmpty, setIsSearchQueryEmpty] = useState(true);

    useEffect(() => {
        // установить расширение от опечаток
        if (searchQuerry === '') {
            setIsSearchQueryEmpty(true);
        } else {
            setIsSearchQueryEmpty(false);
            dispatch(fetchWordsAsync(searchQuerry));
        }
    }, [searchQuerry, dispatch]);

    return (
        <div className="outer-container">
            {/* столько тернарников это не ок, подумай как улучшить решение */}
            {isSearchQueryEmpty ? (
                <InfoMessage text={text.searchQueryEmpty} />
            ) : isLoading ? (
                <InfoMessage text={text.loadingMessage} />
            ) : // лучше просто !words?.length ? (...
            words === undefined || words.length === 0 ? (
                <InfoMessage text={text.nothingFound} />
            ) : (
                <ul className="words-container">
                    {/* для чего нужно спредить words? */}
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
