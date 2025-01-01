import { FC, MouseEvent, useEffect, useState } from 'react';
import { StarIcon } from 'shared/assets';
import { useAppSelector, useAppDispatch } from 'shared/hooks';
import { selectStarredWords } from 'storage/starredWords/selectors';
import { toggleWordInLocalStorage } from 'storage/starredWords/starredWordsSlice';
import { WordDefinition } from 'storage/words/types';

import './WordListItemStar.scss';

type WordListItemStarProps = {
    wordInfo: WordDefinition;
};

export const WordListItemStar: FC<WordListItemStarProps> = ({ wordInfo }) => {
    const [isStarred, setIsStarred] = useState(false);
    const starredWords = useAppSelector(selectStarredWords);
    const dispatch = useAppDispatch();

    const handleStartClick = (event: MouseEvent<HTMLButtonElement>) => {
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
        <button className="star-container" onClick={handleStartClick}>
            <StarIcon
                width={35}
                height={35}
                strokeColor="#81bef5"
                fillColor={isStarred ? '#81bef5' : 'none'}
            />
        </button>
    );
};
