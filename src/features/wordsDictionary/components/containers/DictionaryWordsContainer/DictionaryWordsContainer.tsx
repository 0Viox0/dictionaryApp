import { InfoMessage, WordListItem } from '../../../../../components';
import { useInfoMessageWithWords } from '../../../hooks/useInfoMessageWithWords';

import './DictionaryWordsContainer.scss';

export const DictionaryWordsContainer = () => {
    const { displayInfoMessage, infoMessageText, words } =
        useInfoMessageWithWords();

    return (
        <div className="outer-container">
            {displayInfoMessage ? (
                <InfoMessage text={infoMessageText} />
            ) : (
                <ul className="words-container">
                    {...words!.map((word) => (
                        <li key={word.name}>
                            <WordListItem wordListItemInfo={word} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
