import { Dispatch, FC, useEffect, useState } from 'react';
import { WordDefinition } from '../../redux/words/types';
import { BurgerMenuIcon } from '../../shared/assets/icons/BurgerMenuIcon';
import { WordListItemStar } from './WordListItemStar/WordListItemStar';
import { ExpandSection } from './ExpandSection/ExpandSection';
import { classNames, ClassNamesArgs } from '../../shared/utils/classNames';

import './WordListItem.scss';

type WordListItemProps = {
    wordListItemInfo: WordDefinition;
    setActiveCard?: Dispatch<React.SetStateAction<string | null>>;
};

export const WordListItem: FC<WordListItemProps> = ({
    wordListItemInfo,
    setActiveCard,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isDraggable, setIsDraggable] = useState(false);

    useEffect(() => {
        setIsDraggable(setActiveCard ? true : false);
    }, [setActiveCard]);

    const handleExpandItem = () => {
        setIsExpanded((prevState) => !prevState);
    };

    const handleOnDragStart = () => {
        if (isDraggable) {
            setActiveCard!(wordListItemInfo.name);
        }
    };

    const handleOnDragEnd = () => {
        if (isDraggable) {
            setActiveCard!(wordListItemInfo.name);
        }
    };

    const wordListItemClass = classNames({
        'word-definition-wrapper': true,
        'expanded-padding-bottom': isExpanded,
        'margin-bottom': !isDraggable,
        draggable: isDraggable,
    } as ClassNamesArgs);

    return (
        <div
            className={wordListItemClass}
            onClick={handleExpandItem}
            draggable={isDraggable}
            onDragStart={handleOnDragStart}
            onDragEnd={handleOnDragEnd}
        >
            <div className="word-definition-card">
                <div className="word-definition-card__word-info">
                    {isDraggable && (
                        <BurgerMenuIcon
                            width={30}
                            height={30}
                            className="burgerMenu"
                        />
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
