import { useFilteredWords } from '../../../hooks/useFilteredWords';
import { Fragment, useState } from 'react';
import { changeWordsInLocalStorage } from '../../../../../redux/starredWords/starredWordsSlice';
import { InfoMessage, WordListItem } from '../../../../../components';
import { text } from '../../../../../shared/text';
import { DropArea } from '../../DropArea/DropArea';
import { useAppDispatch } from '../../../../../shared/hooks/useAppDispatch';
import { useAppSelector } from '../../../../../shared/hooks/useAppSelector';

import './StarredWordsContainer.scss';

export const StarredWordsContainer = () => {
    const words = useAppSelector((state) => state.savedWords.words);
    const filteredWords = useFilteredWords(words);
    const [activeCard, setActiveCard] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const onDrop = (name: string | null) => {
        if (activeCard === name) return;

        if (!words) return;

        let wordsCopy = [...words];

        const wordToDelete = wordsCopy.find((word) => word.name === activeCard);
        if (wordToDelete) {
            wordsCopy = wordsCopy.filter((word) => word.name !== activeCard);
        } else {
            return;
        }

        if (name) {
            const index = wordsCopy.findIndex((w) => w.name === name) + 1;
            const resultArray = [
                ...wordsCopy.slice(0, index),
                wordToDelete,
                ...wordsCopy.slice(index),
            ];
            dispatch(changeWordsInLocalStorage(resultArray));
        } else {
            dispatch(changeWordsInLocalStorage([wordToDelete, ...wordsCopy]));
        }
    };

    return (
        <div className="outer-container">
            {!filteredWords.length ? (
                <InfoMessage text={text.nothingFound} />
            ) : (
                <ul className="words-container">
                    <DropArea onDrop={() => onDrop(null)} />
                    {filteredWords.map((word) => (
                        <Fragment key={word.name}>
                            <li>
                                <WordListItem
                                    wordListItemInfo={word}
                                    setActiveCard={setActiveCard}
                                />
                            </li>
                            <DropArea onDrop={() => onDrop(word.name)} />
                        </Fragment>
                    ))}
                </ul>
            )}
        </div>
    );
};
