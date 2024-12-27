// чтобы не было такой глубокой вложенности, нужно использовать абсолютные импорты 
// для этого нужно настроить tsconfig и сборщик
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
                    {/* неправильная логика обработки ошибок */}
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
