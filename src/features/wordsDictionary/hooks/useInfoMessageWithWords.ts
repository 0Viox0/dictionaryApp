import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'shared/hooks';
import { text } from 'shared/text';
import {
    selectCurrentSearchQuery,
    selectLoadingWords,
} from 'storage/words/selectors';
import { fetchWordsAsync } from 'storage/words/thunk';

export const useInfoMessageWithWords = () => {
    const searchQuery = useAppSelector(selectCurrentSearchQuery);
    const { isLoading, isError, words } = useAppSelector(selectLoadingWords);
    const dispatch = useAppDispatch();
    const [isSearchQueryEmpty, setIsSearchQueryEmpty] = useState(true);

    const [displayInfoMessage, setDisplayInfoMessage] = useState(true);
    const [infoMessageText, setInfoMessageText] = useState('');

    useEffect(() => {
        if (searchQuery === '') {
            setIsSearchQueryEmpty(true);
        } else {
            setIsSearchQueryEmpty(false);
            dispatch(fetchWordsAsync(searchQuery));
        }
    }, [searchQuery, dispatch]);

    useEffect(() => {
        setDisplayInfoMessage(true);

        if (isSearchQueryEmpty) {
            setInfoMessageText(text.searchQueryEmpty);
        } else if (isLoading) {
            setInfoMessageText(text.loadingMessage);
        } else if (isError || !words?.length) {
            setInfoMessageText(text.nothingFound);
        } else {
            setDisplayInfoMessage(false);
        }
    }, [isError, isLoading, isSearchQueryEmpty, words]);

    return { displayInfoMessage, infoMessageText, words };
};
