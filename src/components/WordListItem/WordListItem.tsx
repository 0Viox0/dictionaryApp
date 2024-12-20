import { FC, useState } from 'react';
import { WordDefinition } from '../../redux/words/types';
import { DraggableProps } from '../../shared/types';
import { BurgerMenuIcon } from '../../shared/assets/icons/BurgerMenuIcon';
import { WordListItemStar } from './WordListItemStar/WordListItemStar';
import { ExpandSection } from './ExpandSection/ExpandSection';

import './WordListItem.scss';

type WordListItemProps = {
    wordListItemInfo: WordDefinition;
    draggableProps?: DraggableProps;
};

export const WordListItem: FC<WordListItemProps> = ({
    wordListItemInfo,
    // no point in draggable props
    draggableProps,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandItem = () => {
        setIsExpanded((prevState) => !prevState);
    };

    const handleOnDragStart = () => {
        if (draggableProps) {
            draggableProps.setActiveCard(wordListItemInfo.name);
        }
    };

    const handleOnDragEnd = () => {
        if (draggableProps) {
            draggableProps.setActiveCard(wordListItemInfo.name);
        }
    };

    return (
        <div
            // задание - написать свою функцию classNames (аналог функции из библиотеки)
            className={`word-definition-wrapper 
                        ${isExpanded && 'expanded-padding-bottom'}
                        ${!draggableProps ? 'margin-bottom' : 'draggable'}`}
            onClick={handleExpandItem}
            draggable={draggableProps ? true : false}
            onDragStart={handleOnDragStart}
            onDragEnd={handleOnDragEnd}
        >
            <div className="word-definition-card">
                <div className="word-definition-card__word-info">
                    {draggableProps && (
                        <BurgerMenuIcon width={30} height={30} />
                    )}
                    <h3 className="word-definition-card__name">
                        {wordListItemInfo.name}
                    </h3>
                    <span className="word-definition-card__part-of-speech">
                        {wordListItemInfo.partOfSpeech}
                    </span>
                    <div className="word-definition-card__definition">
                        {wordListItemInfo.definitions[0]}
                    </div>
                </div>
                <WordListItemStar wordInfo={wordListItemInfo} />
            </div>
            <ExpandSection
                wordListItemInfo={wordListItemInfo}
                isExpanded={isExpanded}
            />
        </div>
    );
};
