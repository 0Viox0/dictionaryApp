import { InputField } from '../../../../../components';
import { partsOfSpeech } from '../../../types/types';
import { PartOfSpeechCheckbox } from '../../forms/PartOfSpeechCheckbox/PartOfSpeechCheckbox';

export const StarredSearchContainer = () => {
    return (
        <div>
            <InputField />
            <div>
                {partsOfSpeech.map((partOfSpeech, id) => (
                    <PartOfSpeechCheckbox name={partOfSpeech} key={id} />
                ))}
            </div>
        </div>
    );
};
