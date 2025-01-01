import { InputSearchWordContainer } from 'components';
import {
    StarredSearchContainer,
    StarredWordsContainer,
} from 'features/wordsDictionary';

export const Starred = () => {
    return (
        <InputSearchWordContainer
            leftContainerContent={<StarredSearchContainer />}
            rightContainerContent={<StarredWordsContainer />}
        />
    );
};
