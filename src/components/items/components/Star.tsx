import { useEffect, useState } from 'react';
import { WordDefinition } from '../../../redux/words/types';
import '../styles/star.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
    removeWordFromLocalStorage,
    saveWordToLocalStorage,
} from '../../../redux/starredWords/starredWordsSlice';

// создавай отдельный тип/интерфейс для пропсов компонента
const Star = ({ wordInfo }: { wordInfo: WordDefinition }) => {
    const [isStarred, setIsStarred] = useState(false);
    // вынеси в селектор созданный через createSelector
    const starredWords = useSelector(
        (state: RootState) => state.savedWords.words,
    );
    const dispatch = useDispatch();

    const handleStarOnClick = () => {
        // нужно добавить `event.stopPropagation()` чтобы остановить всплытие 
        // (в этом случае не сработает клик для раскрытия списка)

        if (isStarred) {
            // можно объединить в один редьюсер 
            dispatch(removeWordFromLocalStorage(wordInfo));
        } else {
            dispatch(saveWordToLocalStorage(wordInfo));
        }
    };

    useEffect(() => {
        if (starredWords?.find((word) => word.name === wordInfo.name)) {
            setIsStarred(true);
        } else {
            setIsStarred(false);
        }
    }, [starredWords, wordInfo.name]);

    return (
        // это должна быть кнопка 
        <div className="star-container" onClick={handleStarOnClick}>
            <div className={isStarred ? 'blue-star' : 'transparent-star'} />
        </div>
    );
};

export default Star;
