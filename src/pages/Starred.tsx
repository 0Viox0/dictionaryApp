import { InputSearchWordContainer } from '../components';
import { StarredWordsContainer } from '../features/wordsDictionary';
import StarredSearchContainer from '../features/wordsDictionary/components/containers/StarredSearchContainer';

const Starred = () => {
    return (
        // для чего нужен реакт фрагмент? 
        <>
            <InputSearchWordContainer
                leftContainerContent={<StarredSearchContainer />}
                rightContainerContent={<StarredWordsContainer />}
            />
        </>
    );
};

export default Starred;
