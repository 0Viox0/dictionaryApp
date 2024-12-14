import { useEffect, useState } from 'react';
import { WordDefinition } from '../../../redux/words/types';
import '../styles/star.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
    removeWordFromLocalStorage,
    saveWordToLocalStorage,
} from '../../../redux/starredWords/starredWordsSlice';

const Star = ({ wordInfo }: { wordInfo: WordDefinition }) => {
    const [isStarred, setIsStarred] = useState(false);
    const starredWords = useSelector(
        (state: RootState) => state.savedWords.words,
    );
    const dispatch = useDispatch();

    const handleStarOnClick = () => {
        if (isStarred) {
            dispatch(removeWordFromLocalStorage(wordInfo));
        } else {
            dispatch(saveWordToLocalStorage(wordInfo));
        }
    };

    useEffect(() => {
        if (starredWords?.find((word) => word.name === wordInfo.name)) {
            setIsStarred(true);
        } else {
            setIsStarred(false);
        }
    }, [starredWords, wordInfo.name]);

    return (
        <div className="star-container" onClick={handleStarOnClick}>
            <div className={isStarred ? 'blue-star' : 'transparent-star'} />
        </div>
    );
};

export default Star;
