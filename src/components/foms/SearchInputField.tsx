import { ChangeEvent, useEffect, useState } from 'react';
import './search-input.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useDebouncedValue } from '../../hooks/useDebounce';
import { changeInputQuery } from '../../redux/words/wordsSlice';
import { assets } from '../../assets';
import { text } from '../../text/text';

const SearchInputField = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentSearchQuery = useSelector(
        (state: RootState) => state.words.currentWordSearchQuery,
    );

    const [value, setValue] = useState(currentSearchQuery);
    const debouncedValue = useDebouncedValue(value, 300);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        setValue('');
        dispatch(changeInputQuery(''));
    }, [dispatch]);

    useEffect(() => {
        if (debouncedValue !== undefined) {
            dispatch(changeInputQuery(debouncedValue));
        }
    }, [debouncedValue, dispatch]);

    return (
        <div className="input">
            <input
                className="input__form"
                type="text"
                placeholder={text.inputSearchPlaceholder}
                value={value}
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