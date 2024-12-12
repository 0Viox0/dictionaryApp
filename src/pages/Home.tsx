import '../styles/pageStyles/home.scss';
import { InputSearchWordContainer } from '../components';
import { SearchInputField } from '../features/wordSearchInput';
import DictionaryWordsContainer from '../features/wordSearchInput/components/DictionaryWordsContainer';

const Home = () => {
    return (
        <InputSearchWordContainer
            leftContainerContent={<SearchInputField />}
            rightContainerContent={<DictionaryWordsContainer />}
        />
    );
};

export default Home;
