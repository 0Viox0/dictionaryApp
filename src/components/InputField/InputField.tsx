import { ChangeEvent, useEffect, useState } from 'react';
import { changeInputQuery } from '../../redux/words/wordsSlice';
import { text } from '../../shared/text';
import { SearchIcon } from '../../shared/assets/icons/SearchIcon';
import { useDebouncedValue } from '../../shared/hooks/useDebounce';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
// import { useAppDispatch, useAppSelector, useDebouncedValue } from 'shared/hooks';

import { selectCurrentSearchQuery } from '../../redux/words/selectors';

import './InputField.scss';

export const InputField = () => {
    const dispatch = useAppDispatch();
    const currentSearchQuery = useAppSelector(selectCurrentSearchQuery);

    const [value, setValue] = useState(currentSearchQuery);
    const debouncedValue = useDebouncedValue(value, 300);

    // просто handleChange
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
        <div className="form">
            <input
                className="form__inputField"
                type="text"
                placeholder={text.inputSearchPlaceholder}
                value={value}
                onChange={handleOnChange}
            />
            <SearchIcon width={30} height={30} strokeColor="gray" />
        </div>
    );
};
