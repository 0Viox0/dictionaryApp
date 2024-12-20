import { Link } from 'react-router-dom';
import { text } from '../../shared/text';
import { StarIcon } from '../../shared/assets/icons/StarIcon';

import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__page-name">
                {text.homePageName}
            </Link>
            <Link to="/starred" className="header__stared-container">
                <StarIcon
                    width={30}
                    height={30}
                    fillColor="white"
                    strokeColor="white"
                />
                <h3 className="header__page-name">{text.starredPageName}</h3>
            </Link>
        </header>
    );
};
