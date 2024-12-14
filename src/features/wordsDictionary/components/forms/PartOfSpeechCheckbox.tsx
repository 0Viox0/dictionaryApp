import { formatPartOfSpeech } from '../../utils/formatting';
import '../../styles/checkbox.scss';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const PartOfSpeechCheckbox = ({ name }: { name: string }) => {
    const [isActive, setIsActive] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleCheckmarkOnClick = () => {
        setIsActive((prevState) => !prevState);
    };

    useEffect(() => {
        if (isActive) {
            searchParams.set(name, 'true');
        } else {
            searchParams.delete(name);
        }

        setSearchParams(searchParams);
    }, [isActive, name, searchParams, setSearchParams]);

    return (
        <div className="part-of-speech__container">
            <button
                className={`part-of-speech__checkbox ${isActive && 'active'}`}
                onClick={handleCheckmarkOnClick}
            />
            <div className="part-of-speech__name">
                {formatPartOfSpeech(name)}
            </div>
        </div>
    );
};

export default PartOfSpeechCheckbox;
