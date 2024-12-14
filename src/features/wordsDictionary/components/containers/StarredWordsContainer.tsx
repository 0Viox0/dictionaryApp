import { useSelector } from 'react-redux';
import '../../styles/dictionaryWordsContainer.scss';
import { RootState } from '../../../../redux/store';
import { text } from '../../../../text/text';
import { InfoMessage, WordListItem } from '../../../../components';

const StarredWordsContainer = () => {
    const searchQuery = useSelector(
        (state: RootState) => state.words.currentWordSearchQuery,
    );
    const words = useSelector((state: RootState) => state.savedWords.words);

    const filteredWords = words
        ? [...words]
              .sort((a, b) => a.name.localeCompare(b.name))
              .filter((word) => word.name.includes(searchQuery))
        : [];

    return (
        <div className="outer-container">
            {filteredWords.length === 0 ? (
                <InfoMessage text={text.nothingFound} />
            ) : (
                <ul className="words-container">
                    {filteredWords.map((word) => (
                        <li key={word.name}>
                            <WordListItem wordListItemInfo={word} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default StarredWordsContainer;
