import { useRef, useState } from 'react';
import { WordDefinition } from '../../../redux/words/types';
import '../styles/wordListItem.scss';
import Star from './Star';
import ExpandSection from './ExpandSection';

const WordListItem = ({
    wordListItemInfo,
}: {
    wordListItemInfo: WordDefinition;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const starRef = useRef<HTMLDivElement>(null);

    const handleExpandItem = (
        ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        if (starRef.current && !starRef.current.contains(ev.target as Node)) {
            setIsExpanded((prevState) => !prevState);
        }
    };

    return (
        <div
            className={`word-definition-wrapper ${isExpanded && 'expanded-padding-bottom'}`}
            onClick={handleExpandItem}
        >
            <div className="word-definition-card">
                <div className="word-definition-card__word-info">
                    <h1 className="word-definition-card__name">
                        {wordListItemInfo.name}
                    </h1>
                    <span className="word-definition-card__part-of-speech">
                        {wordListItemInfo.partOfSpeech}
                    </span>
                    <div className="word-definition-card__definition">
                        {wordListItemInfo.definitions[0]}
                    </div>
                </div>
                <div ref={starRef}>
                    <Star wordInfo={wordListItemInfo} />
                </div>
            </div>
            <ExpandSection
                wordListItemInfo={wordListItemInfo}
                isExpanded={isExpanded}
            />
        </div>
    );
};

export default WordListItem;
