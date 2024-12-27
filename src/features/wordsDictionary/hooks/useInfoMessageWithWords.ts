import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { useAppSelector } from '../../../shared/hooks/useAppSelector';
import {
    selectCurrentSearchQuery,
    selectLoadingWords,
} from '../../../redux/words/selectors';
import { fetchWordsAsync } from '../../../redux/words/thunk';
import { text } from '../../../shared/text';

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
        // неправильное условие
        } else if (isError && !words?.length) {
            setInfoMessageText(text.nothingFound);
        } else {
            setDisplayInfoMessage(false);
        }
    }, [isError, isLoading, isSearchQueryEmpty, words]);

    return { displayInfoMessage, infoMessageText, words };
};
