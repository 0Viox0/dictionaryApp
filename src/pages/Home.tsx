import { InputSearchWordContainer, InputField } from 'components';
import { DictionaryWordsContainer } from 'features/wordsDictionary';

export const Home = () => {
    return (
        <InputSearchWordContainer
            leftContainerContent={<InputField />}
            rightContainerContent={<DictionaryWordsContainer />}
        />
    );
};
