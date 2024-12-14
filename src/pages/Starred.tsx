import { InputSearchWordContainer } from '../components';
import SearchInputField from '../components/foms/SearchInputField';
import { StarredWordsContainer } from '../features/wordsDictionary';

const Starred = () => {
    return (
        <>
            <InputSearchWordContainer
                leftContainerContent={<SearchInputField />}
                rightContainerContent={<StarredWordsContainer />}
            />
        </>
    );
};

export default Starred;
