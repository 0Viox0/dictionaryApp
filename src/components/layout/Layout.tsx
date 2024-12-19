import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Layout = () => {
    return (
        // если не нужна вложенность, то лучше использовать реакт фрагмент <></>
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
