import '../styles/pageStyles/home.scss';
import { InputSearchWordContainer } from '../components';
import DictionaryWordsContainer from '../features/wordSearchInput/components/containers/DictionaryWordsContainer';
import { SearchInputField } from '../features/wordSearchInput';

const Home = () => {
    return (
        <InputSearchWordContainer
            leftContainerContent={<SearchInputField />}
            rightContainerContent={<DictionaryWordsContainer />}
        />
    );
};

export default Home;
