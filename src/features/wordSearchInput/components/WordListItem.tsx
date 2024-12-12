import { WordDefinition } from '../../../redux/words/types';
import '../styles/wordListItem.scss';

const WordListItem = ({
    wordListItemInfo,
}: {
    wordListItemInfo: WordDefinition;
}) => {
    return (
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
            <div className="blue-star"></div>
        </div>
    );
};

export default WordListItem;
