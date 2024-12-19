import { FC, useEffect, useState } from 'react';
import { WordDefinition } from '../../../redux/words/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
    removeWordFromLocalStorage,
    saveWordToLocalStorage,
} from '../../../redux/starredWords/starredWordsSlice';
import { StarIcon } from '../../../shared/assets/icons/StarIcon';

import './WordListItemStar.scss';

type WordListItemStarProps = {
    wordInfo: WordDefinition;
};

export const WordListItemStar: FC<WordListItemStarProps> = ({ wordInfo }) => {
    const [isStarred, setIsStarred] = useState(false);
    // вынеси в селектор созданный через createSelector
    const starredWords = useSelector(
        (state: RootState) => state.savedWords.words,
    );
    const dispatch = useDispatch();

    const handleStarOnClick = () => {
        // нужно добавить `event.stopPropagation()` чтобы остановить всплытие
        // (в этом случае не сработает клик для раскрытия списка)

        if (isStarred) {
            // можно объединить в один редьюсер
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
        // это должна быть кнопка
        <div className="star-container" onClick={handleStarOnClick}>
            <StarIcon
                width={35}
                height={35}
                strokeColor="#81bef5"
                fillColor={isStarred ? '#81bef5' : 'none'}
            />
        </div>
    );
};
