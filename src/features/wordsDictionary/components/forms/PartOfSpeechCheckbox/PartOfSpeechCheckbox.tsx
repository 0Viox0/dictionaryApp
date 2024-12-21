import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { formatPartOfSpeech } from '../../../utils/formatting';
import {
    classNames,
    ClassNamesArgs,
} from '../../../../../shared/utils/classNames';

import './PartOfSpeechCheckbox.scss';

export const PartOfSpeechCheckbox = ({ name }: { name: string }) => {
    const [isActive, setIsActive] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const toggleCheckmark = () => {
        setIsActive((prevState) => !prevState);
    };

    useEffect(() => {
        setIsActive(searchParams.has(name));
    }, [name, searchParams]);

    useEffect(() => {
        if (isActive) {
            searchParams.set(name, 'true');
        } else {
            searchParams.delete(name);
        }

        setSearchParams(searchParams);
    }, [isActive, name, searchParams, setSearchParams]);

    const checkboxClass = classNames({
        'part-of-speech__checkbox': true,
        active: isActive,
    } as ClassNamesArgs);

    return (
        <div className="part-of-speech__container">
            <input
                type="checkbox"
                id={`${name}`}
                className={checkboxClass}
                onChange={toggleCheckmark}
            />
            <label htmlFor={`${name}`}>{formatPartOfSpeech(name)}</label>
        </div>
    );
};
