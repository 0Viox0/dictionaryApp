import { InputField } from 'components/index';
import { partsOfSpeech } from 'features/wordsDictionary/types/types';
import { PartOfSpeechCheckbox } from '../../forms/PartOfSpeechCheckbox/PartOfSpeechCheckbox';

import './StarredSearchContainer.scss';

export const StarredSearchContainer = () => {
    return (
        <div>
            <InputField />
            <div className="checkbox-container">
                {partsOfSpeech.map((partOfSpeech, id) => (
                    <PartOfSpeechCheckbox name={partOfSpeech} key={id} />
                ))}
            </div>
        </div>
    );
};
