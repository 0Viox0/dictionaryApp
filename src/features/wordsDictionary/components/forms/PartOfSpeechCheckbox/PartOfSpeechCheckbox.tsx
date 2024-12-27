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
        // нет необходимости в `as ClassNamesArgs`, лучше убрать
    } as ClassNamesArgs);

    return (
        // чаще всего кастомный чекбокс делают так, чтобы можно было вставить какую-то свою иконку 
        // посмотри на реализацию из этого видео https://youtu.be/EotjsvTobso?si=Jq00jHjPN4Ks_pCd
        <div className="part-of-speech__container">
            {/* также можно просто обернуть input в тег label и тогда не будет необходимости в атрибуте `htmlFor` */}
            <input
                type="checkbox"
                // в этом нет необходимости, можно просто id={name}
                id={`${name}`}
                className={checkboxClass}
                onChange={toggleCheckmark}
            />
            {/* тоже самое */}
            <label htmlFor={`${name}`}>{formatPartOfSpeech(name)}</label>
        </div>
    );
};
