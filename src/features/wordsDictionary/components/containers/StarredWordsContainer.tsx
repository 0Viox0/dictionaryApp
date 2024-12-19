import { useDispatch, useSelector } from 'react-redux';
import '../../styles/dictionaryWordsContainer.scss';
import { AppDispatch, RootState } from '../../../../redux/store';
import { text } from '../../../../text/text';
import { InfoMessage, WordListItem } from '../../../../components';
import { useFilteredWords } from '../../hooks/useFilteredWords';
import { useState } from 'react';
import DropArea from '../other/DropArea';
import React from 'react';
import { changeWordsInLocalStorage } from '../../../../redux/starredWords/starredWordsSlice';

const StarredWordsContainer = () => {
    const words = useSelector((state: RootState) => state.savedWords.words);
    const filteredWords = useFilteredWords(words);
    const [activeCard, setActiveCard] = useState<string | null>(null);
    const dispatch = useDispatch<AppDispatch>();

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
            {/* просто !filteredWords.length и не сравнивать с 0 */}
            {filteredWords.length === 0 ? (
                <InfoMessage text={text.nothingFound} />
            ) : (
                <ul className="words-container">
                    <DropArea onDrop={() => onDrop(null)} />
                    {filteredWords.map((word) => (
                        <React.Fragment key={word.name}>
                            <li>
                                <WordListItem
                                    wordListItemInfo={word}
                                    // не вижу смысла в draggableProps, и в целом в draggable
                                    draggableProps={{
                                        draggable: true,
                                        setActiveCard: setActiveCard,
                                    }}
                                />
                            </li>
                            <DropArea onDrop={() => onDrop(word.name)} />
                        </React.Fragment>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StarredWordsContainer;
