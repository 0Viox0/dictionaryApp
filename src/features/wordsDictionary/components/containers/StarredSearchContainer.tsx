import SearchInputField from '../../../../components/foms/SearchInputField';
import { partsOfSpeech } from '../../types/types';
import PartOfSpeechCheckbox from '../forms/PartOfSpeechCheckbox';

const StarredSearchContainer = () => {
    return (
        <div>
            <SearchInputField />
            <div>
                {partsOfSpeech.map((partOfSpeech, id) => (
                    <PartOfSpeechCheckbox name={partOfSpeech} key={id} />
                ))}
            </div>
        </div>
    );
};

export default StarredSearchContainer;
