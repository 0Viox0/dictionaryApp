import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Home, Starred } from './pages';

import './shared/styles/index.scss';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/starred" element={<Starred />} />
            </Route>
        </Routes>
    );
}
