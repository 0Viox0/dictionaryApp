import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { changeInputQuery } from '../../redux/words/wordsSlice';
import { text } from '../../shared/text';
import { SearchIcon } from '../../shared/assets/icons/SearchIcon';
import { useDebouncedValue } from '../../shared/hooks/useDebounce';

import './InputField.scss';

export const InputField = () => {
    // можно создать отдельные useAppDispatch и useAppSelector который будет включать в себе типизацию
    const dispatch = useDispatch<AppDispatch>();
    // селекторы лучше создавать отдельно через createSelector
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
