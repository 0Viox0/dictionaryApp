import { ChangeEvent } from 'react';
import { assets } from '../../../assets';
import { text } from '../../../text/text';
import '../styles/search-input.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { changeInputQuery } from '../../../redux/words/wordsSlice';

const SearchInputField = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentSearchQuery = useSelector(
        (state: RootState) => state.words.currentWordSearchQuery,
    );

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInputQuery(e.target.value));
    };

    return (
        <div className="input">
            <input
                className="input__form"
                type="text"
                placeholder={text.inputSearchPlaceholder}
                value={currentSearchQuery}
                onChange={handleOnChange}
            />
            <img
                className="input__icon"
                src={assets.searchIcon}
                alt="search icon"
            />
        </div>
    );
};

export default SearchInputField;
