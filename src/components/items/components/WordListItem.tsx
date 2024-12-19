import { useRef, useState } from 'react';
import { WordDefinition } from '../../../redux/words/types';
import '../styles/wordListItem.scss';
import Star from './Star';
import ExpandSection from './ExpandSection';
import BurgerMenu from './icons/BurgerMenu';
import { DraggableProps } from '../../../types/general';


// type WordListItemProps = {
//     wordListItemInfo: WordDefinition;
//     draggableProps?: DraggableProps;
// }

// const WordListItem: FC<WordListItemProps> = ({
//     wordListItemInfo,
//     draggableProps,
// }) => {

const WordListItem = ({
    wordListItemInfo,
    draggableProps,
}: {
    // создавай отдельный тип/интерфейс для пропсов компонента
    wordListItemInfo: WordDefinition;
    draggableProps?: DraggableProps;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const starRef = useRef<HTMLDivElement>(null);

    const handleExpandItem = (
        // импортируй MouseEvent - так будет выглядеть чище
        // не сокращай event, оставляй читабельный вид
        ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        // необходимости в этом не будет
        if (starRef.current && !starRef.current.contains(ev.target as Node)) {
            setIsExpanded((prevState) => !prevState);
        }
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
                    {draggableProps && <BurgerMenu />}
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
                {/* необходимости в ref и во вложенности не будет */}
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
