import { ChangeEvent, useEffect, useState } from 'react';
import { selectCurrentSearchQuery } from 'storage/words/selectors';
import { changeInputQuery } from 'storage/words/wordsSlice';
import { SearchIcon } from 'shared/assets/icons/SearchIcon';
import { text } from 'shared/text';
import {
    useAppDispatch,
    useAppSelector,
    useDebouncedValue,
} from 'shared/hooks';

import './InputField.scss';

export const InputField = () => {
    const dispatch = useAppDispatch();
    const currentSearchQuery = useAppSelector(selectCurrentSearchQuery);

    const [value, setValue] = useState(currentSearchQuery);
    const debouncedValue = useDebouncedValue(value, 300);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
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
                onChange={handleChange}
            />
            <SearchIcon width={30} height={30} strokeColor="gray" />
        </div>
    );
};
