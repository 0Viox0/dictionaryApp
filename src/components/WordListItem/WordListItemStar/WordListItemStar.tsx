import { FC, MouseEvent, useEffect, useState } from 'react';
import { WordDefinition } from '../../../redux/words/types';
import { toggleWordInLocalStorage } from '../../../redux/starredWords/starredWordsSlice';
import { StarIcon } from '../../../shared/assets/icons/StarIcon';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';
import { useAppSelector } from '../../../shared/hooks/useAppSelector';
import { selectStarredWords } from '../../../redux/starredWords/selectors';

import './WordListItemStar.scss';

type WordListItemStarProps = {
    wordInfo: WordDefinition;
};

export const WordListItemStar: FC<WordListItemStarProps> = ({ wordInfo }) => {
    const [isStarred, setIsStarred] = useState(false);
    const starredWords = useAppSelector(selectStarredWords);
    const dispatch = useAppDispatch();

    const handleStarOnClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        dispatch(toggleWordInLocalStorage(wordInfo));
    };

    useEffect(() => {
        if (starredWords?.find((word) => word.name === wordInfo.name)) {
            setIsStarred(true);
        } else {
            setIsStarred(false);
        }
    }, [starredWords, wordInfo.name]);

    return (
        <button className="star-container" onClick={handleStarOnClick}>
            <StarIcon
                width={35}
                height={35}
                strokeColor="#81bef5"
                fillColor={isStarred ? '#81bef5' : 'none'}
            />
        </button>
    );
};
