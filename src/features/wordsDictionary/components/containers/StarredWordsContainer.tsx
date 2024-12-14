import { useSelector } from 'react-redux';
import '../../styles/dictionaryWordsContainer.scss';
import { RootState } from '../../../../redux/store';
import { text } from '../../../../text/text';
import { InfoMessage, WordListItem } from '../../../../components';
import { useFilteredWords } from '../../hooks/useFilteredWords';

const StarredWordsContainer = () => {
    const words = useSelector((state: RootState) => state.savedWords.words);
    const filteredWords = useFilteredWords(words);

    return (
        <div className="outer-container">
            {filteredWords.length === 0 ? (
                <InfoMessage text={text.nothingFound} />
            ) : (
                <ul className="words-container">
                    {filteredWords.map((word) => (
                        <li key={word.name}>
                            <WordListItem wordListItemInfo={word} draggable />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StarredWordsContainer;
