import { Link } from 'react-router-dom';
import { text } from '../../text/text';
import './styles/headerStyels.scss';
import './styles/star.scss';

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__page-name">
                {text.homePageName}
            </Link>
            <Link to="/starred" className="header__stared-container">
                <div className="star" />
                <h1 className="header__page-name">{text.starredPageName}</h1>
            </Link>
        </header>
    );
};

export default Header;
