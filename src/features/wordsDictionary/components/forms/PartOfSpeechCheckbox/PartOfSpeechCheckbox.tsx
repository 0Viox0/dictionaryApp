import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { formatPartOfSpeech } from 'features/wordsDictionary/utils/formatting';
import { CheckIcon } from 'shared/assets/icons/CheckIcon';

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

    return (
        <div className="checkbox-wrapper">
            <label>
                <div>
                    <input
                        type="checkbox"
                        className="real-checkbox"
                        onChange={toggleCheckmark}
                        checked={isActive}
                    />
                    <span className="custom-checkbox">
                        <CheckIcon className="check-icon" />
                    </span>
                </div>
                <span className="text">{formatPartOfSpeech(name)}</span>
            </label>
        </div>
    );
};
