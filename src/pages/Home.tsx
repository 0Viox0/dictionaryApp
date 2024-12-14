import '../styles/pageStyles/home.scss';
import { InputSearchWordContainer } from '../components';
import SearchInputField from '../components/foms/SearchInputField';
import { DictionaryWordsContainer } from '../features/wordsDictionary';

const Home = () => {
    return (
        <InputSearchWordContainer
            leftContainerContent={<SearchInputField />}
            rightContainerContent={<DictionaryWordsContainer />}
        />
    );
};

export default Home;
